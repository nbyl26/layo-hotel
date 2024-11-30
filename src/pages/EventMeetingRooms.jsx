import React, { useState } from 'react';
import Slider from "react-slick"; // Import react-slick untuk carousel
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import RoomImage1 from "../assets/images/room1.jpg"; // Gambar ruangan pertama
import RoomImage2 from "../assets/images/room2.jpg"; // Gambar ruangan kedua
import RoomImage3 from "../assets/images/room3.jpg"; // Gambar ruangan ketiga

const EventMeetingRooms = () => {
  const [fadeIn, setFadeIn] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setFadeIn(true), 200); // FadeIn effect setelah beberapa waktu
  }, []);

  // Pengaturan slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  // Data ruang yang tersedia
  const rooms = [
    { name: 'Meeting Room 1', capacity: 30, price: 'Rp1,500,000/day', description: 'Ideal for small meetings', image: RoomImage1 },
    { name: 'Conference Hall', capacity: 200, price: 'Rp10,000,000/day', description: 'Perfect for conferences or large events', image: RoomImage2 },
    { name: 'Wedding Ballroom', capacity: 150, price: 'Rp8,000,000/day', description: 'Spacious ballroom for weddings and receptions', image: RoomImage3 }
  ];

  return (
    <div className="container py-5" style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f8f9fa" }}>
      {/* Header Section */}
      <h2 className={`text-center mb-5 ${fadeIn ? "fade-in" : ""}`} style={{ color: "#007bff", fontWeight: "800", fontSize: "3rem", letterSpacing: "2px" }}>
        Event & Meeting Rooms
      </h2>

      {/* Overview Section */}
      <div className="text-center mb-5">
        <p className={`lead ${fadeIn ? "fade-in" : ""}`} style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "#555", lineHeight: "1.8" }}>
          Layo-Hotel menawarkan berbagai ruang untuk berbagai acara bisnis, pertemuan, konferensi, serta acara sosial seperti pernikahan. Dilengkapi dengan fasilitas modern dan layanan profesional, kami pastikan acara Anda berjalan lancar dan sukses.
        </p>
      </div>

      
    </div>
  );
};

export default EventMeetingRooms;
