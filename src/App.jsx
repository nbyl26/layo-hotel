import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HotelDetail from './pages/HotelDetail';
import Navbar from './components/Navbar';
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel-detail" element={<HotelDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
