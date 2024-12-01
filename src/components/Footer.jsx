import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #007bff, #0056b3)",
        color: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <div className="container">
        {/* Navigation Menu */}
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap", 
            marginBottom: "20px",
            gap: "30px",
          }}
        >

          {["Home", "Rooms", "Event & Meeting Rooms", "Booking History", "About", "Contact"].map((item, index) => {
            const link = item === "Home"
              ? "/"
              : item === "Event & Meetings Room"
                ? "/event-meeting-rooms"
                : `/${item.toLowerCase().replace(" ", "-")}`;
            return (
              <li key={index}>
                <Link
                  to={link}
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "1rem",
                    transition: "color 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#a8d2ff")}
                  onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Social Media Icons */}
        <div style={{ marginBottom: "20px" }}>
          {[
            { name: "github", link: "https://github.com/nbyl26" },
            { name: "instagram", link: "https://instagram.com/nbyl.26" },
            { name: "linkedin", link: "https://linkedin.com/in/nabilpasha" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                fontSize: "1.5rem",
                margin: "0 15px",
                transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#a8d2ff";
                e.target.style.transform = "scale(1.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#ffffff";
                e.target.style.transform = "scale(1)";
              }}
            >
              <i className={`bi bi-${social.name}`}></i>
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p
          style={{
            fontSize: "0.9rem",
            fontWeight: "400",
            marginTop: "10px",
          }}
        >
          Nabil Pasha | &copy; 2024 Layo-Hotel. All Rights Reserved.
        </p>
      </div>

      {/* Glow Effect */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "150px",
          height: "10px",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 80%)",
          filter: "blur(8px)",
          zIndex: "-1",
        }}
      ></div>
    </footer>
  );
};

export default Footer;
