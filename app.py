import os
import torch
import torch.nn as nn
from torchvision.transforms import v2
from PIL import Image
import base64
import io
from flask import Flask, request, jsonify, render_template, redirect, url_for
from werkzeug.utils import secure_filename

# Import your model and tokenizer
from model import ImageCaptioningModel
from loaders import get_tokenizer

# Global variables
MODEL_PATH = 'model.pth'
DEVICE = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
MODEL = None
TOKENIZER = None

def create_app():
    app = Flask(__name__)
    app.config['UPLOAD_FOLDER'] = 'uploads'
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max upload
    app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}

    # Create upload folder if it doesn't exist
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    
    # Create templates folder if it doesn't exist
    os.makedirs('templates', exist_ok=True)
    
    # Create simple HTML templates if they don't exist
    if not os.path.exists('templates/index.html'):
        with open('templates/index.html', 'w') as f:
            f.write('''
            <!DOCTYPE html>
            <html>
            <head>
                <title>Image Captioning Service</title>
                <style>
                    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
                    h1 { color: #333; }
                    .upload-form { margin: 20px 0; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
                    .submit-btn { background-color: #4CAF50; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; }
                    .submit-btn:hover { background-color: #45a049; }
                </style>
            </head>
            <body>
                <h1>Image Captioning Service</h1>
                <div class="upload-form">
                    <h2>Upload an image</h2>
                    <form action="/predict" method="post" enctype="multipart/form-data">
                        <input type="file" name="file" accept=".png,.jpg,.jpeg" required>
                        <button type="submit" class="submit-btn">Generate Caption</button>
                    </form>
                </div>
            </body>
            </html>
            ''')
    
    if not os.path.exists('templates/result.html'):
        with open('templates/result.html', 'w') as f:
            f.write('''
            <!DOCTYPE html>
            <html>
            <head>
                <title>Caption Result</title>
                <style>
                    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
                    h1 { color: #333; }
                    .result-container { margin: 20px 0; }
                    .image-container { margin: 20px 0; }
                    img { max-width: 100%; max-height: 500px; }
                    .caption { font-size: 1.2em; margin: 20px 0; padding: 10px; background-color: #f8f8f8; border-left: 4px solid #4CAF50; }
                    .back-btn { background-color: #008CBA; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; text-decoration: none; display: inline-block; }
                    .back-btn:hover { background-color: #007B9A; }
                </style>
            </head>
            <body>
                <h1>Caption Result</h1>
                <div class="result-container">
                    <div class="image-container">
                        <img src="data:image/jpeg;base64,{{ image_data }}" alt="Uploaded Image">
                    </div>
                    <div class="caption">
                        <p><strong>Generated Caption:</strong> {{ caption }}</p>
                    </div>
                    <a href="/" class="back-btn">Upload Another Image</a>
                </div>
            </body>
            </html>
            ''')
            
    with app.app_context():
        # Initialize model and tokenizer
        initialize()
    
    return app

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def load_model(model_path, device, vocab_size=30522, embed_size=768, hidden_size=1024, num_layers=5):
    model = ImageCaptioningModel(
        vocab_size=vocab_size,
        embed_size=embed_size,
        hidden_size=hidden_size,
        num_layers=num_layers
    )
    model.load_state_dict(torch.load(model_path, map_location=device))
    model.to(device)
    model.eval()
    return model

def preprocess_image(image, transform):
    if isinstance(image, str):
        # If image is a file path
        image = Image.open(image).convert("RGB")
    else:
        # If image is already a PIL Image
        image = image.convert("RGB")
    return transform(image)

def generate_caption(model, image, device, tokenizer, max_length=256):
    model.eval()
    
    with torch.no_grad():
        image = image.unsqueeze(0)
        features = model.encoder(image)
        
        hidden = model.decoder.init_hidden(features)
        
        current_token = torch.tensor([[tokenizer.cls_token_id]], device=device)
        caption = [tokenizer.cls_token_id]
        
        for _ in range(max_length):
            outputs, hidden = model.decoder(current_token, hidden=hidden)
            
            predicted = outputs.argmax(1)
            predicted_token = predicted.item()
            caption.append(predicted_token)
            
            if predicted_token == tokenizer.sep_token_id:
                break
                
            current_token = predicted.unsqueeze(0)
        
        return tokenizer.decode(caption, skip_special_tokens=True)

def initialize():
    global MODEL, TOKENIZER
    TOKENIZER = get_tokenizer()
    MODEL = load_model(MODEL_PATH, DEVICE)
    print(f"Model loaded and running on {DEVICE}")

def get_image_transform():
    return v2.Compose([
        v2.Resize((356, 356)),
        v2.ToImage(),
        v2.ToDtype(torch.float32, scale=True),
        v2.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])

# Create the Flask application
app = create_app()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if file and allowed_file(file.filename):
        # Save the file
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Process the image
        transform = get_image_transform()
        image = preprocess_image(filepath, transform)
        image = image.to(DEVICE)
        
        # Generate caption
        caption = generate_caption(MODEL, image, DEVICE, TOKENIZER)
        
        # Return result
        if request.headers.get('Accept') == 'application/json':
            return jsonify({
                'caption': caption,
                'image_path': filepath
            })
        else:
            # For browser requests
            img = Image.open(filepath)
            buffered = io.BytesIO()
            img.save(buffered, format="JPEG")
            img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')
            
            return render_template(
                'result.html',
                caption=caption,
                image_data=img_str
            )
    
    return jsonify({'error': 'Invalid file format'})

@app.route('/api/caption', methods=['POST'])
def api_caption():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and allowed_file(file.filename):
        # Save the file
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Process the image
        transform = get_image_transform()
        image = preprocess_image(filepath, transform)
        image = image.to(DEVICE)
        
        # Generate caption
        caption = generate_caption(MODEL, image, DEVICE, TOKENIZER)
        
        return jsonify({
            'success': True,
            'caption': caption
        })
    
    return jsonify({'error': 'Invalid file format'}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)