import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/hero.css';  

import BgImage from "../assets/images/bg-hotel.png";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 500); // Delay untuk animasi
  }, []);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "-66.3px",
        height: "100vh",
        position: "relative",
        color: "#ffffff",
        zIndex: -1, // Pastikan hero berada di bawah navbar
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
