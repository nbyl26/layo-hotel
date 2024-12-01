import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#007bff",
        color: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
        paddingTop: "40px",
      }}
    >
      <div className="container py-5">
        {/* Footer Top Section */}
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h4 style={{ fontWeight: "700", marginBottom: "20px" }}>About Layo-Hotel</h4>
            <p style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
              Experience luxury and comfort at Layo-Hotel. With our premium facilities, prime locations, and excellent services, we ensure unforgettable stays and successful events for our guests.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h4 style={{ fontWeight: "700", marginBottom: "20px" }}>Quick Links</h4>
            <ul style={{ listStyleType: "none", paddingLeft: 0, lineHeight: "2" }}>
              {["Home", "Rooms", "Event & Meeting Rooms", "Booking History", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(" & ", "-").replace(" ", "-")}`}
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                      transition: "color 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#a8d2ff")}
                    onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="col-md-4 mb-4">
            <h4 style={{ fontWeight: "700", marginBottom: "20px" }}>Contact Us</h4>
            <p style={{ fontSize: "0.95rem", lineHeight: "2" }}>
              <i className="bi bi-geo-alt-fill"></i> Indralaya, South Sumatra, Indonesia
              <br />
              <i className="bi bi-envelope-fill"></i> contact@layo-hotel.com
              <br />
              <i className="bi bi-telephone-fill"></i> +62 711 1234567
            </p>
            <div className="social-icons mt-3">
              {["facebook", "instagram", "twitter", "linkedin"].map((social, index) => (
                <a
                  key={index}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffffff",
                    fontSize: "1.5rem",
                    marginRight: "15px",
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
                  <i className={`bi bi-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div
          style={{
            height: "5px",
            width: "80px",
            background: "linear-gradient(90deg, #ffffff, #a8d2ff)",
            margin: "30px auto",
          }}
        ></div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-4">
          <p style={{ fontSize: "0.9rem" }}>
            &copy; {new Date().getFullYear()} Layo-Hotel. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
