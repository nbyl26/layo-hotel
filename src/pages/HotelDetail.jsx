import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarAlt, faUsers, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";

const HotelDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const room = location.state?.room;

  const [loading, setLoading] = useState(false);

  if (!room) {
    navigate("/");
    return <div>Room data is not available. Please go back to the homepage.</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const checkInDate = document.getElementById("checkInDate").value;
    const checkOutDate = document.getElementById("checkOutDate").value;
    const guests = document.getElementById("guests").value;

    if (!checkInDate || !checkOutDate || !guests) {
      alert("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const reservationData = {
        roomTitle: room.title,
        roomPrice: room.price,
        roomImage: room.image,
        checkInDate,
        checkOutDate,
        guests,
      };

      const response = await fetch("http://localhost:3001/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Reservation successful!");
        navigate("/confirmation", { state: { reservation: reservationData } });
      } else {
        alert(result.message || "Failed to make a reservation.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5" style={{ fontFamily: "'Poppins', sans-serif", color: "#444" }}>
      {/* Header Section */}
      <div className="text-center position-relative" style={{ marginBottom: "40px" }}>
        <img
          src={room.image}
          alt={room.title}
          className="img-fluid rounded shadow-lg"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-white"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px 40px",
            borderRadius: "20px",
          }}
        >
          <h1 className="fw-bold" style={{ fontSize: "2.5rem" }}>
            {room.title}
          </h1>
          <h4 className="mt-2" style={{ color: "#f8c94b" }}>
            {room.price}
          </h4>
        </div>
      </div>

      {/* Content Section */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <p
            className="mb-4 text-center"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#555",
            }}
          >
            {room.description}
          </p>

          <h5 className="mb-3" style={{ fontWeight: "600" }}>
            Room Features:
          </h5>
          <ul className="list-group mb-5">
            {room.features.map((feature, index) => (
              <li
                key={index}
                className="list-group-item d-flex align-items-center"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              >
                <FontAwesomeIcon icon={faCheckCircle} className="text-success me-3" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Reservation Form */}
          <form
            className="p-4 rounded shadow"
            style={{ backgroundColor: "#f7f7f7" }}
            onSubmit={handleSubmit}
          >
            <h5 className="mb-3 text-center" style={{ fontWeight: "700", color: "#007bff" }}>
              Reserve Your Stay
            </h5>
            {/* <div className="mb-3">
              <label htmlFor="checkInDate" className="form-label">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                Check-in Date
              </label>
              <input
                type="date"
                className="form-control"
                id="checkInDate"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="checkOutDate" className="form-label">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                Check-out Date
              </label>
              <input
                type="date"
                className="form-control"
                id="checkOutDate"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="guests" className="form-label">
                <FontAwesomeIcon icon={faUsers} className="me-2" />
                Guests
              </label>
              <input
                type="number"
                className="form-control"
                id="guests"
                placeholder="Number of guests"
                style={{ borderRadius: "10px" }}
              />
            </div> */}
            <div className="mb-4">
              <label htmlFor="checkInDate" className="form-label d-flex align-items-center" style={{ fontSize: "1rem", fontWeight: "500" }}>
                <FaCalendarAlt className="me-2" style={{ fontSize: "1.5rem", color: "#007bff" }} />
                Check-in Date
              </label>
              <input
                type="date"
                name="date"
                className="form-control shadow-sm border-0"
                id="checkInDate" 
                style={{ paddingLeft: "40px" }}
              />
            </div>
            <div className="mb-4">
              <label className="form-label d-flex align-items-center" style={{ fontSize: "1rem", fontWeight: "500" }}>
                <FaCalendarAlt className="me-2" style={{ fontSize: "1.5rem", color: "#007bff" }} />
                Check-out Date
              </label>
              <input
                type="date"
                name="date"
                className="form-control shadow-sm border-0"
                id="checkOutDate"  
                required
                style={{ paddingLeft: "40px" }}
              />
            </div>

            <div className="mb-4">
              <label className="form-label d-flex align-items-center" style={{ fontSize: "1rem", fontWeight: "500" }}>
                <FaUsers className="me-2" style={{ fontSize: "1.5rem", color: "#007bff" }} />
                Guest
              </label>
              <input
                type="number"
                name="guest"
                className="form-control shadow-sm border-0"
                id="guests"  
                placeholder="Number of guests"
                required
                style={{ paddingLeft: "40px" }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{
                background: "linear-gradient(90deg, #007bff, #0056b3)",
                padding: "12px",
                fontWeight: "600",
                borderRadius: "30px",
                backgroundColor: loading ? "#6c757d" : "#007bff",
                border: "none",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.background = "linear-gradient(90deg, #0056b3, #003f7f)")
              }
              onMouseLeave={(e) =>
                (e.target.style.background = "linear-gradient(90deg, #007bff, #0056b3)")
              }
              disabled={loading}
            >
              {loading ? "Processing..." : "Reserve Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
