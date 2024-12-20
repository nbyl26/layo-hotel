import React, { useEffect, useState } from "react";
import "../styles/features.css";

const Features = () => {
  const features = [
    {
      icon: "bi-house-door-fill",
      title: "Luxury Rooms",
      description: "Spacious and comfortable rooms designed for your relaxation.",
    },
    {
      icon: "bi-wifi",
      title: "Free Wi-Fi",
      description: "Stay connected with high-speed internet throughout the property.",
    },
    {
      icon: "bi-cup-straw",
      title: "Cafe & Dining",
      description: "Delicious food and drinks served with love.",
    },
    {
      icon: "bi-geo-alt-fill",
      title: "Prime Locations",
      description: "Situated in the heart of tourist attractions.",
    },
  ];

  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFeatures(true);
    }, 500); // Delay untuk animasi
  }, []);

  return (
    <div className="container-features text-center py-5">
      <h2 className="mb-4" style={{ color: "#007bff", fontWeight: "700" }}>
        Why Choose Us
      </h2>
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <div
            className={`col-md-5 col-lg-3 mb-4 ${showFeatures ? "feature-animate" : ""}`}
            key={index}
          >
            <div className="card feature-card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <i className={`features-icon ${feature.icon}`}></i>
                <h5 className="features-title">{feature.title}</h5>
                <p className="features-description">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
