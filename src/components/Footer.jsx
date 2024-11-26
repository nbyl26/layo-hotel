import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-4" style={{ backgroundColor: "#343a40", color: "#fff" }}>
      <div>
        <p>© 2024 Layo-Hotel. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="me-3 text-light">
            <i className="bi bi-github"></i>
          </a>
          <a href="#" className="me-3 text-light">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="me-3 text-light">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
