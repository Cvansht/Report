import Login from './components/Pages/Login.tsx'
import Results from './components/Pages/Results.tsx'
import XrayDetect from './components/Pages/XrayDetect.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';

function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<Login />}/>
      
        <Route path="/results" element={
            //@ts-ignore
            <Results />}/>
        <Route path="/upload" element={
            //@ts-ignore
            <XrayDetect/>}/>

      </Routes>
    </Router>
    
    </>
  )
}

export default App;
