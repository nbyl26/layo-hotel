import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/App.css'; 

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HotelDetail from "./pages/HotelDetail";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Confirmation from "./pages/ConfirmationPage";
import BookingHistory from "./pages/BookingHistory";
import Details from "./pages/Details";
import PageNotFound from "./pages/PageNotFound";
import EventMeetingRooms from "./pages/EventMeetingRooms";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel-detail" element={<HotelDetail />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/event-meeting-rooms" element={<EventMeetingRooms />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
