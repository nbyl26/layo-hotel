import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const reservation = location.state?.reservation;
  if (!reservation) {
    navigate("/");
    return <div>Reservation data is not available. Please go back to the homepage.</div>;
  }

  return (
    <div
      className="container my-5 text-center"
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#444",
      }}
    >
      {/* Header */}
      <div
        className="text-center p-5 mb-4 rounded shadow"
        style={{
          background: "linear-gradient(135deg, #007bff, #00b4d8)",
          color: "#fff",
          borderRadius: "20px",
        }}
      >
        <h1
          className="fw-bold"
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Reservation Confirmed! 🎉
        </h1>
        <p
          className="lead"
          style={{
            fontSize: "1.25rem",
            color: "#e3f2fd",
          }}
        >
          Thank you for choosing our services. Below are the details of your reservation.
        </p>
      </div>

      {/* Reservation Details */}
      <div
        className="p-4 rounded shadow-lg"
        style={{
          backgroundColor: "#f7f7f7",
          borderRadius: "20px",
        }}
      >
        <h3
          className="mb-4 text-primary"
          style={{
            fontWeight: "600",
          }}
        >
          Reservation Details
        </h3>

        <div className="row text-start">
          {/* Room Details */}
          <div className="col-lg-6 mb-4">
            <div className="p-4 bg-white rounded shadow-sm">
              <h5
                className="text-secondary mb-3"
                style={{
                  fontWeight: "700",
                }}
              >
                Room Information
              </h5>
              <p><strong>Room Title:</strong> {reservation.roomTitle}</p>
              <p><strong>Price:</strong> {reservation.roomPrice}</p>
              <img
                src={reservation.roomImage}
                alt="Room"
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* User Details */}
          <div className="col-lg-6">
            <div className="p-4 bg-white rounded shadow-sm">
              <h5
                className="text-secondary mb-3"
                style={{
                  fontWeight: "700",
                }}
              >
                Booking Information
              </h5>
              <p><strong>Check-in Date:</strong> {reservation.checkInDate}</p>
              <p><strong>Check-out Date:</strong> {reservation.checkOutDate}</p>
              <p><strong>Guests:</strong> {reservation.guests}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Note */}
      <div
        className="mt-5 p-4 rounded shadow"
        style={{
          backgroundColor: "#e3f2fd",
        }}
      >
        <h4
          className="text-primary mb-3"
          style={{
            fontWeight: "700",
          }}
        >
          Thank You!
        </h4>
        <p
          style={{
            fontSize: "1.1rem",
          }}
        >
          If you have any questions or need assistance, please contact us anytime. We look forward to hosting you!
        </p>
      </div>

      {/* Back to Homepage Button */}
      <button
        className="btn btn-primary mt-4 px-5 py-2"
        onClick={() => navigate("/")}
        style={{
          fontWeight: "600",
          borderRadius: "30px",
          transition: "background-color 0.3s",
        }}
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default ConfirmationPage;
