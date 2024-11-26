import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#007bff", fontWeight: "700" }}>
        About Us
      </h2>
      <p className="text-center">
        Layo-Hotel is a premium hotel offering luxurious stays and memorable experiences. We are
        committed to providing world-class services to all our guests.
      </p>
      <div className="text-center mt-4">
        <img
          src="https://via.placeholder.com/800x400"
          alt="About Layo-Hotel"
          className="img-fluid rounded"
        />
      </div>
    </div>
  );
};

export default About;
