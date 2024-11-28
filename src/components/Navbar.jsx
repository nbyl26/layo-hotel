import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); 

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
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#0056b3"; // Biru lebih gelap
            e.target.style.transform = "translateY(-3px)"; // Sedikit naik
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#007bff";
            e.target.style.transform = "translateY(0)";
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
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            {["Home", "Rooms", "About"].map((item, index) => {
              const page = item.toLowerCase();
              const isActive =
                location.pathname === `/${page}` ||
                (page === "home" && location.pathname === "/");

              return (
                <li key={index} className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/${page === "home" ? "" : page}`}
                    style={{
                      color: isActive ? "#007bff" : "#212529",
                      fontWeight: "500",
                      padding: "10px 15px",
                      position: "relative",
                      textDecoration: "none",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "#007bff")
                    }
                    onMouseLeave={(e) => {
                      if (!isActive) e.target.style.color = "#212529";
                    }}
                  >
                    {item}
                    <span
                      style={{
                        content: "''",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: isActive ? "100%" : "0%",
                        height: "2px",
                        backgroundColor: "#007bff",
                        transition: "width 0.3s ease-in-out",
                      }}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact Us */}
          <Link
            className="btn text-white px-4"
            to="/contact"
            style={{
              background: "linear-gradient(90deg, #007bff, #0056b3)",
              borderRadius: "30px",
              fontWeight: "600",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
              width: "fit-content",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #0056b3, #003f7f)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #007bff, #0056b3)")
            }
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
