import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

// Import gambar secara eksplisit
import BgImage1 from "../assets/images/bg-hotel1.png";
import BgImage2 from "../assets/images/bg-hotel2.png";
import BgImage3 from "../assets/images/bg-hotel3.png";

const HeroSection = () => {
  const images = [BgImage1, BgImage2, BgImage3]; // Masukkan gambar dalam array

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Tampilkan konten dengan animasi
    setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Ganti gambar secara otomatis
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [images.length]);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "-66.3px",
        height: "100vh",
        position: "relative",
        color: "#ffffff",
        zIndex: -1,
        transition: "background-image 1s ease-in-out", // Efek transisi untuk pergantian gambar
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
      <div
        className={`content text-center ${showContent ? "fade-in" : ""}`}
        style={{
          position: "relative",
          zIndex: 1,
          top: "50%",
          transform: "translateY(-50%)",
          transition: "opacity 1s ease-in-out",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            marginBottom: "20px",
            opacity: showContent ? 1 : 0,
          }}
        >
          Welcome to Layo-Hotel
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            marginBottom: "30px",
            opacity: showContent ? 1 : 0,
          }}
        >
          Experience luxury and comfort in every stay.
        </p>
        <Link
          to="/rooms"
          className={`btn btn-primary ${showContent ? "btn-animate" : ""}`}
          style={{
            fontSize: "1.25rem",
            padding: "10px 30px",
            borderRadius: "30px",
            background: "linear-gradient(90deg, #007bff, #28a745)",
            border: "none",
            color: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease",
          }}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
