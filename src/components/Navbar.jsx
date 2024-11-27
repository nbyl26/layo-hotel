import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top"
      style={{
        padding: "10px 20px",
        fontFamily: "'Poppins', sans-serif",
        zIndex: "9999",
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontWeight: "700",
            color: "#007bff",
            fontSize: "1.5rem",
          }}
        >
          Layo-Hotel
        </Link>

        {/* Toggler for Mobile */}
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

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Nav Item */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{
                  color: "#212529",
                  fontWeight: "500",
                  padding: "10px 15px",
                  transition: "0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "#007bff")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "#212529")
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/rooms"
                style={{
                  color: "#212529",
                  fontWeight: "500",
                  padding: "10px 15px",
                  transition: "0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "#007bff")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "#212529")
                }
              >
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{
                  color: "#212529",
                  fontWeight: "500",
                  padding: "10px 15px",
                  transition: "0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "#007bff")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "#212529")
                }
              >
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
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "scale(1)")
                }
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
