
import { useState,useEffect } from "react";
import axios from 'axios';

import { ArrowLeft, AlertCircle, CheckCircle, FileText, Download, Share2 } from "lucide-react";

export default function Results() {
    const [summary, setSummary] = useState(null);
  //  useEffect(()=> {
 //       axios.get('/summary').then((res) => {
  //          setSummary(res.data)}), []});

  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-green-700 text-white p-4 flex items-center shadow-md">
        <button className="p-2 rounded-lg hover:bg-green-800" aria-label="Go back">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="ml-4 text-xl font-semibold">X-Ray Detection Result</h1>
        <div className="ml-auto flex gap-2">
          <button className="p-2 rounded-lg hover:bg-green-800" aria-label="Download report">
            <Download className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-green-800" aria-label="Share results">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* Patient Info */}
        <div className="bg-white p-6 flex  justify-between rounded-xl shadow">
          <p className="text-lg"><strong>Patient ID:</strong> XR-2023-0542</p>
          <p className="text-lg" ><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        
          <p className="text-amber-600"><strong>Status:</strong> Pending Review</p>
        </div>

       {/* X-Ray Image */}
<div className="flex justify-center">
  <div className="relative w-72 h-72 bg-gray-100 rounded-xl shadow flex items-center justify-center overflow-hidden">
    <img
      src="https://res.cloudinary.com/dveqjb2e7/image/upload/v1741026229/mlbarnvk1frulnv4y0px.jpg"
      alt=""
      className="object-cover w-full h-full rounded-xl"
      onError={(e) => (e.currentTarget.style.display = 'none')}
    />
    
  </div>
</div>


        {/* Detection Results */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-green-800 border-b pb-2">Detection Results</h2>
          
          

          {/* Summary */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="flex items-center text-xl font-bold text-green-800">
              <FileText className="h-6 w-6 mr-2" /> Diagnostic Summary
            </h2>
            
            {summary ? summary : (
           <p className="text-gray-700 mt-3">
             The patient is diagnosed with <strong>Pneumonia (80%)</strong> and <strong>Lung Abnormality (90%)</strong>. 
             No signs of Covid-19 detected. Further testing is recommended.
             </p>
)}

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-4 text-center text-sm text-gray-500 border-t">
        <p>© 2023 Medical Imaging AI. Results should be reviewed by a healthcare professional.</p>
      </footer>
    </div>
  );
}

