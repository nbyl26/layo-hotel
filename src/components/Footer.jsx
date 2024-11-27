import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-4" style={{ backgroundColor: "#343a40", color: "#fff" }}>
      <div>
        <p>© 2024 Layo-Hotel. All rights reserved.</p>
        <div className="social-icons">
          <a href='https://github.com/nbyl26' className="me-3 text-light" style={{ fontSize: "1.5rem" }}>
            <i className="bi bi-github"></i>
          </a>
          <a href='https://www.instagram.com/nbyl.26' className="me-3 text-light" style={{ fontSize: "1.5rem" }}>
            <i className="bi bi-instagram"></i>
          </a>
          <a href='https://www.linkedin.com/in/nabilpasha/' className="me-3 text-light" style={{ fontSize: "1.5rem" }}>
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
