import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const booking = location.state?.booking; // Ambil data dari state

    if (!booking) {
        return (
            <div className="text-center my-5">
                <h2>No booking data found!</h2>
                <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate("/booking-history")}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div
            className="container my-5"
            style={{ fontFamily: "'Poppins', sans-serif", color: "#444" }}
        >
            <div className="text-center mb-4">
                <h1
                    className="fw-bold"
                    style={{ fontSize: "2.5rem", color: "#007bff" }}
                >
                    Booking Details
                </h1>
            </div>
            <div className="card shadow p-4" style={{ borderRadius: "15px" }}>
                <img
                    src={booking.roomImage}
                    alt={booking.roomTitle}
                    className="img-fluid mb-4"
                    style={{ borderRadius: "10px", height: "300px", objectFit: "cover" }}
                />
                <h2 className="fw-bold">{booking.roomTitle}</h2>
                <p>
                    <strong>Check-in:</strong> {booking.checkInDate}
                </p>
                <p>
                    <strong>Check-out:</strong> {booking.checkOutDate}
                </p>
                <p>
                    <strong>Guests:</strong> {booking.guests}
                </p>
                <p>
                    <strong>Price:</strong> {booking.price}
                </p>
                <p>
                    <strong>Status:</strong>{" "}
                    <span
                        style={{
                            color: booking.status === "Confirmed" ? "green" : "red",
                            fontWeight: "bold",
                        }}
                    >
                        {booking.status}
                    </span>
                </p>
                <button
                    className="btn btn-secondary mt-3"
                    onClick={() => navigate("/booking-history")}
                >
                    Back to Booking History
                </button>
            </div>
        </div>
    );
};

export default Details;
