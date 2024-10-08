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
