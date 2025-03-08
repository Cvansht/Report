import Login from './components/Pages/Login.tsx'
import Results from './components/Pages/Results.tsx'
import XrayDetect from './components/Pages/XrayDetect.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';
import React from 'react';

function App() {

  const [files, setFiles] = React.useState([]);


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<Login />}/>
<<<<<<< HEAD
      
        <Route path="/results" element={
            //@ts-ignore
            <Results />}/>
        <Route path="/upload" element={
            //@ts-ignore
            <XrayDetect/>}/>
=======
        <Route path="/results" element={<Results files={files} />}/>
        <Route path="/upload" element={<XrayDetect setFiles={setFiles} files={files}/>}/>
>>>>>>> b05c8a1e83afb95807a751ae5fd3f9ef33f90425

      </Routes>
    </Router>
    
    </>
  )
}

export default App;