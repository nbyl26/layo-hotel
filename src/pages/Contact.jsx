import React, { useEffect, useState, useRef } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const formRef = useRef(null);  // Reference to form container
  const [formHeight, setFormHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200); // Fade-in effect
  }, []);

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight); // Set form height on load
    }
  }, [formRef.current]);

  return (
    <div
      className="container my-5"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f8f9fa",
        padding: "50px 20px",
        borderRadius: "15px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <h2
        className={`text-center mb-4 ${fadeIn ? "fade-in" : ""}`}
        style={{
          color: "#007bff",
          fontWeight: "800",
          fontSize: "2.5rem",
          letterSpacing: "1px",
          transition: "opacity 1s ease-in-out",
        }}
      >
        Contact Us
      </h2>

      {/* Contact and Map Section */}
      <div className="d-flex justify-content-between align-items-start">
        {/* Google Map Section (Left side) */}
        <div
          className="map-container"
          style={{
            flex: 1,
            marginRight: "20px",
            height: `${formHeight}px`, // Dynamic height
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            transition: "opacity 1s ease-in-out",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            className="map"
            style={{
              width: "100%",
              height: "100%", // Full height of the parent container
              borderRadius: "15px",
            }}
          >
            <iframe
              title="Layo-Hotel Location"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2177.0134985847512!2d104.65064322933114!3d-3.2198778919345017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3bbdf1ba5ade17%3A0xec8169998ecd82bc!2sFakultas%20Ilmu%20Komputer%20UNSRI%20Indralaya!5e0!3m2!1sid!2sid!4v1732799735378!5m2!1sid!2sid"></iframe>
          </div>
        </div>

        {/* Contact Form (Right side) */}
        <div
          ref={formRef} // Reference to the form container
          className="form-container"
          style={{
            flex: 1,
            marginLeft: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "auto",
          }}
        >
          <form className={`${fadeIn ? "fade-in" : ""}`} style={{ height: "100%" }}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="form-label d-flex align-items-center"
                style={{ fontSize: "1.2rem" }}
              >
                <i className="bi bi-person-fill me-2" style={{ fontSize: "1.5rem" }}></i>
                Name
              </label>
              <input
                type="text"
                className="form-control shadow-sm"
                id="name"
                placeholder="Your Name"
                style={{
                  borderRadius: "30px",
                  padding: "15px",
                  fontSize: "1.1rem",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="form-label d-flex align-items-center"
                style={{ fontSize: "1.2rem" }}
              >
                <i className="bi bi-envelope-fill me-2" style={{ fontSize: "1.5rem" }}></i>
                Email
              </label>
              <input
                type="email"
                className="form-control shadow-sm"
                id="email"
                placeholder="Your Email"
                style={{
                  borderRadius: "30px",
                  padding: "15px",
                  fontSize: "1.1rem",
                  transition: "border-color 0.3s ease",
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="form-label d-flex align-items-center"
                style={{ fontSize: "1.2rem" }}
              >
                <i className="bi bi-pencil-fill me-2" style={{ fontSize: "1.5rem" }}></i>
                Message
              </label>
              <textarea
                className="form-control shadow-sm"
                id="message"
                rows="5"
                placeholder="Your Message"
                style={{
                  borderRadius: "15px",
                  padding: "15px",
                  fontSize: "1.1rem",
                  transition: "border-color 0.3s ease",
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                padding: "12px 40px",
                borderRadius: "30px",
                fontSize: "1.25rem",
                transition: "all 0.3s ease",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
