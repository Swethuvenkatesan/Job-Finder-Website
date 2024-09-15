import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Jobs from './pages/Jobs';
import Companies from './pages/Companies';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/register';
import Login from './pages/Login';
import JobProvider from './context/JobContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './pages/Jobs.css';
import './index.css';
import Footer from './components/Footer';


// ImageSection Component to Display Image
/* const ImageSection = () => {
  return (
    <div className="Image-section  border-1 ">
       <div className="card bg-dark text-white border-0 "></div>
      <img
       className="card-img img-fluid  mt-3 ms-4"
        src="https://wallpaperbat.com/img/305496-digital-marketing-wallpaper-png-7-png-image.png"  
        alt="Job Finder"
        style={{
          width: '97%',          // Makes the image take full width of its container
          maxWidth: '100%',       // Limits the max width to 900px for better responsiveness         
          objectFit: 'cover',  
          height: '300px',     // Ensures the image is cropped correctly without distortion
          
        }} />
    </div>
  );
}; */





// Main App Component

const App =()=> {
  return (
    
    <JobProvider> {/* Providing context to the application */}
    <Router>
      <Navbar /> {/* Navbar for navigation */}
       
      
  
      <div className="container mt-3 text-dark">
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Navigate to="/jobs" replace />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
      </div>
      <Footer />

    </Router>
  </JobProvider>   
       
  );
}

export default App;
