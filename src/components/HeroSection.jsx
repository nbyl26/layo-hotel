import React from "react";

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url('https://via.placeholder.com/1920x800')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        color: "#ffffff",
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
        className="content text-center"
        style={{
          position: "relative",
          zIndex: 1,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: "700", marginBottom: "20px" }}>
          Welcome to Layo-Hotel
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
          Experience luxury and comfort in every stay.
        </p>
        <button
          className="btn btn-primary"
          style={{
            fontSize: "1.25rem",
            padding: "10px 30px",
            borderRadius: "30px",
            background: "linear-gradient(90deg, #007bff, #28a745)",
            border: "none",
            color: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
