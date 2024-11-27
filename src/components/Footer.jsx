import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center py-4"
      style={{
        backgroundColor: "#f8f9fa", // Latar belakang yang lebih ringan
        color: "#212529", // Warna teks yang lebih netral
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)", // Efek bayangan halus di atas
      }}
    >
      <div className="container">
        {/* Teks copyright */}
        <p style={{ fontSize: "1rem", marginBottom: "15px", color: "#6c757d" }}>
          © 2024 <span style={{ fontWeight: "600", color: "#007bff" }}>Layo-Hotel</span>. All rights reserved.
        </p>

        {/* Ikon Sosial Media */}
        <div className="social-icons">
          <a
            href="https://github.com/nbyl26"
            className="me-3 text-dark"
            style={{
              fontSize: "1.5rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#007bff")}
            onMouseLeave={(e) => (e.target.style.color = "#212529")}
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.instagram.com/nbyl.26"
            className="me-3 text-dark"
            style={{
              fontSize: "1.5rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#007bff")}
            onMouseLeave={(e) => (e.target.style.color = "#212529")}
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nabilpasha/"
            className="me-3 text-dark"
            style={{
              fontSize: "1.5rem",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#007bff")}
            onMouseLeave={(e) => (e.target.style.color = "#212529")}
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        {/* Additional Footer Text */}
        <p style={{ fontSize: "0.9rem", color: "#6c757d", marginTop: "20px" }}>
          Developed by <strong>Nabil Pasha</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
