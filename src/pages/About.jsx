import React, { useEffect, useState } from "react";
import LobbyHotel from "../assets/images/bg-hotel2.png";

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200); // Efek fade-in
  }, []);

  return (
    <div
      className="container-about my-5"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f8f9fa",
        padding: "50px 20px",
        borderRadius: "15px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Section Background Animation */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          background: "linear-gradient(45deg, #007bff, #28a745)",
          opacity: "0.2",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
          zIndex: "-1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "400px",
          height: "400px",
          background: "linear-gradient(135deg, #28a745, #007bff)",
          opacity: "0.15",
          borderRadius: "50%",
          animation: "float-reverse 6s ease-in-out infinite",
          zIndex: "-1",
        }}
      ></div>

      {/* Title */}
      <h2
        className={`text-center mb-4 ${fadeIn ? "fade-in" : ""}`}
        style={{
          color: "#007bff",
          fontWeight: "800",
          fontSize: "2.5rem",
          letterSpacing: "1px",
        }}
      >
        About Us
      </h2>

      {/* Description */}
      <p
        className={`text-center mx-auto ${fadeIn ? "fade-in" : ""}`}
        style={{
          maxWidth: "800px",
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "30px",
          animationDelay: "0.3s",
        }}
      >
        At Layo-Hotel, we redefine luxury with elegance and warmth. Nestled in the heart of the city,
        our hotel is a sanctuary where every detail is designed to provide you with an unparalleled
        experience. Whether you're here for business or leisure, we ensure your stay will be
        memorable.
      </p>

      {/* Image with Hover Effect */}
      <div className="text-center mt-5">
        <img
          src={LobbyHotel}
          alt="About Layo-Hotel"
          className={`img-fluid rounded shadow-lg ${fadeIn ? "zoom-in" : ""}`}
          style={{
            maxHeight: "500px",
            objectFit: "cover",
            transition: "transform 0.5s ease-in-out",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>

      {/* Our Commitment Section */}
      <div className="text-center mt-4">
        <h3
          className={`mt-4 ${fadeIn ? "fade-in" : ""}`}
          style={{
            color: "#007bff",
            fontWeight: "700",
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Our Commitment
        </h3>
        <p
          className={`mx-auto ${fadeIn ? "fade-in" : ""}`}
          style={{
            maxWidth: "700px",
            fontSize: "1.2rem",
            color: "#555",
            lineHeight: "1.8",
            animationDelay: "0.6s",
          }}
        >
          Layo-Hotel is dedicated to crafting an unforgettable experience for every guest. With
          modern amenities, exceptional service, and a team that cares, we strive to make every
          moment extraordinary. From personalized experiences to impeccable hospitality, your
          satisfaction is our mission.
        </p>
      </div>

      {/* Decorative Divider */}
      <div
        style={{
          height: "5px",
          width: "80px",
          background: "linear-gradient(90deg, #007bff, #28a745)",
          margin: "30px auto",
          borderRadius: "50px",
        }}
      ></div>
    </div>
  );
};

export default About;
