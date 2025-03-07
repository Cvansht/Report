import React, { useState } from "react";
import { Upload, FileX } from "lucide-react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
export default function XrayDetect() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

   const navigate=useNavigate()
  const handleDrop = (e) => {
    e.preventDefault();
    setFiles([...files, ...Array.from(e.dataTransfer.files)]);
  };

  const handleChange = (e) => {
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (files.length === 0) return;

    setUploading(true);
    
    const formData = new FormData();
    formData.append("file", files[0]);
    axios.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {setUploading(false);
           navigate('/results')

        }, 3000);
       
        
  })
  .catch((err) => {
    console.error(err);
    setTimeout(() => {
      setUploading(false);
      navigate('/results'); 
      setFiles([]);
    }, 3000);
  });
        
        
      
    
    
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gray-900 text-white p-6 text-center text-2xl font-bold shadow-md">
        XrayDetect
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Upload X-ray</h2>
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer transition-all hover:border-orange-500 hover:bg-orange-50"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <Upload className="w-14 h-14 text-orange-500 mx-auto" />
            <p className="text-gray-500 mt-2">Drag & Drop or</p>
            <label className="bg-orange-500 text-white px-5 py-2 rounded-lg cursor-pointer inline-block mt-3 transition hover:bg-orange-600">
              Browse
              <input type="file" multiple className="hidden" onChange={handleChange} />
            </label>
          </div>

          {files.length > 0 && (
            <ul className="mt-4 space-y-2">
              {files.map((file, index) => (
                <li key={index} className="flex justify-between items-center p-3 bg-gray-200 rounded-lg shadow-sm">
                  <span className="text-sm font-medium truncate w-3/4">{file.name}</span>
                  <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700 transition">
                    <FileX size={20} />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {files.length > 0 && (
            <button
              onClick={handleUpload}
              className={`mt-4 w-full py-2 rounded-lg text-white font-semibold transition ${uploading ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Upload Files"}
            </button>
          )}
        </div>
      </main>

      <footer className="bg-gray-900 text-white p-5 text-center text-sm rounded-t-lg shadow-md">
        &copy; 2025 XrayDetect. All rights reserved.
      </footer>
    </div>
  );
}
