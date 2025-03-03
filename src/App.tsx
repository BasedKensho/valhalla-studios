import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Login from './pages/Login';
import BookACall from './pages/BookACall';
import SovereignRanks from './pages/SovereignRanks';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book-a-call" element={<BookACall />} />
          <Route path="/sovereign-ranks" element={<SovereignRanks />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;