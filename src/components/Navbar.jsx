import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = location.pathname === "/"; // Periksa apakah halaman home

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 70); // Navbar menjadi solid jika scroll lebih dari 70px
      };

      handleScroll(); // Jalankan sekali untuk menentukan transparansi awal
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsScrolled(true); // Navbar solid di halaman selain home
    }
  }, [isHomePage]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light shadow-sm sticky-top ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
      style={{
        padding: "10px 20px",
        fontFamily: "'Poppins', sans-serif",
        zIndex: "9999",
        transition: "background-color 0.3s ease-in-out", // Animasi transisi
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontWeight: "700",
            color: isScrolled ? "#007bff" : "#ffffff", // Warna logo berubah berdasarkan posisi scroll
            fontSize: "1.5rem",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = isScrolled ? "#0056b3" : "#e0e0e0"; // Efek hover berdasarkan transparansi
            e.target.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = isScrolled ? "#007bff" : "#ffffff";
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
            {["Home", "Rooms", "About", "Booking History"].map((item, index) => {
              const page = item.toLowerCase().replace(" ", "-");
              const isActive =
                location.pathname === `/${page}` ||
                (page === "home" && location.pathname === "/");

              return (
                <li key={index} className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/${page === "home" ? "" : page}`}
                    style={{
                      color: isScrolled
                        ? isActive
                          ? "#007bff"
                          : "#212529"
                        : "#ffffff", // Warna menu berubah menjadi putih saat transparan
                      fontWeight: "500",
                      padding: "10px 15px",
                      position: "relative",
                      textDecoration: "none",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = isScrolled ? "#007bff" : "#e0e0e0")
                    }
                    onMouseLeave={(e) => {
                      if (!isActive)
                        e.target.style.color = isScrolled ? "#212529" : "#ffffff";
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
                        backgroundColor: isScrolled ? "#007bff" : "#ffffff",
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
