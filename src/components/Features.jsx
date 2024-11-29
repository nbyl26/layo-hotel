import React, { useEffect, useState } from "react";
import '../styles/features.css';

const Features = () => {
  const features = [
    { icon: "bi-house-door-fill", title: "Luxury Rooms", description: "Kamar yang luas dan nyaman dirancang untuk relaksasi Anda." },
    { icon: "bi-wifi", title: "Free Wi-Fi", description: "Stay connected with high-speed internet throughout the property." },
    { icon: "bi-cup-straw", title: "Café & Dining", description: "Delicious food and drinks served with love." },
    { icon: "bi-geo-alt-fill", title: "Prime Locations", description: "Situated in the heart of tourist attractions." },
  ];

  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowFeatures(true);
    }, 500); // Delay untuk animasi
  }, []);

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4" style={{ color: "#007bff", fontWeight: "700" }}>
        Why Choose Us
      </h2>
      <div className="row">
        {features.map((feature, index) => (
          <div className={`col-md-3 mb-4 ${showFeatures ? "feature-animate" : ""}`} key={index}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <i
                  className={`features-icon ${feature.icon}`}
                  ></i>
                <h5 className="features-title">
                  {feature.title}
                </h5>
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
