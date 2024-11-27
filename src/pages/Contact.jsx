import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#007bff", fontWeight: "700", fontSize: "2.5rem" }}>
        Contact Us
      </h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="form-label d-flex align-items-center" style={{ fontSize: "1.2rem" }}>
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
          <label htmlFor="email" className="form-label d-flex align-items-center" style={{ fontSize: "1.2rem" }}>
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
          <label htmlFor="message" className="form-label d-flex align-items-center" style={{ fontSize: "1.2rem" }}>
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
  );
};

export default Contact;
