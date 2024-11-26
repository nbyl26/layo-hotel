import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
      style={{ padding: "10px 20px" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ fontWeight: "700", color: "#007bff" }}>
          Layo-Hotel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "#212529" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rooms" style={{ color: "#212529" }}>
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "#212529" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-white px-4"
                to="/contact"
                style={{
                  borderRadius: "30px",
                  fontWeight: "600",
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
