import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const booking = location.state?.booking; // Ambil data dari state

    if (!booking) {
        return (
            <div
                className="d-flex justify-content-center align-items-center vh-100"
                style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#444",
                }}
            >
                <div className="text-center">
                    <h2 style={{ color: "#dc3545", fontWeight: "bold" }}>
                        No Booking Data Found!
                    </h2>
                    <p className="text-muted mb-4">
                        It seems there’s no data to display. Please go back and try again.
                    </p>
                    <button
                        className="btn btn-primary"
                        style={{
                            padding: "10px 20px",
                            fontWeight: "600",
                            borderRadius: "30px",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                        onClick={() => navigate("/booking-history")}
                    >
                        Back to Booking History
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="container my-5"
            style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#444",
                maxWidth: "900px",
            }}
        >
            {/* Header Section */}
            <div className="text-center mb-5">
                <h1
                    className="fw-bold"
                    style={{
                        fontSize: "2.8rem",
                        color: "#007bff",
                        textShadow: "1px 1px 4px rgba(0, 123, 255, 0.6)",
                    }}
                >
                    Booking Details
                </h1>
                <p
                    className="text-muted"
                    style={{ fontSize: "1.2rem", marginTop: "-10px" }}
                >
                    View all details of your booking at Layo-Hotel.
                </p>
            </div>

            {/* Booking Details Card */}
            <div
                className="card shadow-lg p-4"
                style={{
                    borderRadius: "20px",
                    border: "none",
                    background:
                        "linear-gradient(to bottom right, #f8f9fa, #ffffff, #e9ecef)",
                    transition: "transform 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                {/* Room Image */}
                <img
                    src={booking.roomImage}
                    alt={booking.roomTitle}
                    className="img-fluid mb-4 rounded"
                    style={{
                        maxHeight: "350px",
                        objectFit: "cover",
                        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                    }}
                />

                {/* Booking Information */}
                <div className="details">
                    <h2
                        className="fw-bold text-center"
                        style={{
                            color: "#0056b3",
                            textTransform: "capitalize",
                        }}
                    >
                        {booking.roomTitle}
                    </h2>
                    <hr />
                    <p
                        className="fw-light text-muted"
                        style={{
                            fontSize: "1.1rem",
                            marginBottom: "30px",
                            textAlign: "center",
                        }}
                    >
                        Your luxurious stay at Layo-Hotel is just a step away.
                    </p>
                    <div
                        className="row mb-3"
                        style={{
                            fontSize: "1rem",
                            color: "#333",
                        }}
                    >
                        <div className="col-md-6 mb-3">
                            <strong>Check-in:</strong> {booking.checkInDate}
                        </div>
                        <div className="col-md-6 mb-3">
                            <strong>Check-out:</strong> {booking.checkOutDate}
                        </div>
                        <div className="col-md-6 mb-3">
                            <strong>Guests:</strong> {booking.guests}
                        </div>
                        <div className="col-md-6 mb-3">
                            <strong>Price:</strong>{" "}
                            <span style={{ color: "#f8c94b", fontWeight: "bold" }}>
                                {booking.roomPrice}
                            </span>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className="text-center">
                        <span
                            className="badge"
                            style={{
                                backgroundColor:
                                    booking.status === "Confirmed" ? "#28a745" : "#dc3545",
                                color: "#fff",
                                padding: "12px 20px",
                                fontSize: "1rem",
                                borderRadius: "20px",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            {booking.status}
                        </span>
                    </div>
                </div>

                {/* Back Button */}
                <div className="text-center mt-5">
                    <button
                        className="btn btn-secondary px-4 py-2"
                        style={{
                            fontWeight: "600",
                            borderRadius: "30px",
                            background: "linear-gradient(90deg, #007bff, #0056b3)",
                            border: "none",
                            color: "#fff",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                            transition: "background 0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.background = "linear-gradient(90deg, #0056b3, #003f7f)")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.background = "linear-gradient(90deg, #007bff, #0056b3)")
                        }
                        onClick={() => navigate("/booking-history")}
                    >
                        Back to Booking History
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
