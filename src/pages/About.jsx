import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#007bff", fontWeight: "700" }}>
        About Us
      </h2>
      <p className="text-center" style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}>
        Layo-Hotel is a premium hotel offering luxurious stays and memorable experiences. We are
        committed to providing world-class services to all our guests. Our focus is on creating
        a welcoming and luxurious environment for travelers seeking comfort, elegance, and
        exceptional hospitality.
      </p>
      <div className="text-center mt-5">
        <img
          src="https://via.placeholder.com/800x400"
          alt="About Layo-Hotel"
          className="img-fluid rounded shadow-lg"
          style={{
            maxHeight: "500px",
            objectFit: "cover",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </div>
      <div className="text-center mt-4">
        <h3 style={{ color: "#007bff", fontWeight: "600" }}>Our Commitment</h3>
        <p style={{ fontSize: "1.2rem", color: "#555", lineHeight: "1.6" }}>
          At Layo-Hotel, we are committed to ensuring that every guest experience is
          unforgettable. From luxurious rooms to world-class dining, our team is dedicated to
          providing the highest level of service and care.
        </p>
      </div>
    </div>
  );
};

export default About;
