import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBookings, setFilteredBookings] = useState([]);
  const navigate = useNavigate();

  // Dummy data for bookings
  useEffect(() => {
    const bookingData = [
      {
        id: 1,
        roomTitle: "Deluxe Suite",
        roomImage: "/images/deluxe_suite.jpg",
        checkInDate: "2024-12-01",
        checkOutDate: "2024-12-05",
        guests: 2,
        price: "$500",
        status: "Confirmed",
      },
      {
        id: 2,
        roomTitle: "Standard Room",
        roomImage: "/images/standard_room.jpg",
        checkInDate: "2024-11-20",
        checkOutDate: "2024-11-22",
        guests: 1,
        price: "$200",
        status: "Cancelled",
      },
    ];

    setBookings(bookingData);
    setFilteredBookings(bookingData);
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = bookings.filter((booking) =>
      booking.roomTitle.toLowerCase().includes(value)
    );
    setFilteredBookings(filtered);
  };

  return (
    <div
      className="container my-5"
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#444",
      }}
    >
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1
          className="fw-bold"
          style={{
            fontSize: "2.5rem",
            color: "#007bff",
          }}
        >
          Booking History
        </h1>
        <p className="text-muted" style={{ fontSize: "1.2rem" }}>
          Keep track of your past and upcoming bookings with ease.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by room title..."
          value={search}
          onChange={handleSearch}
          style={{
            borderRadius: "10px",
            border: "1px solid #ddd",
            padding: "10px 20px",
            fontSize: "1rem",
          }}
        />
      </div>

      {/* Booking Cards */}
      <div className="row">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <div className="col-md-6 col-lg-4 mb-4" key={booking.id}>
              <div
                className="card shadow-sm h-100"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  border: "none",
                  transition: "transform 0.3s",
                }}
              >
                <img
                  src={booking.roomImage}
                  alt={booking.roomTitle}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{booking.roomTitle}</h5>
                  <p className="card-text text-muted">
                    <strong>Check-in:</strong> {booking.checkInDate} <br />
                    <strong>Check-out:</strong> {booking.checkOutDate} <br />
                    <strong>Guests:</strong> {booking.guests}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span
                      className="badge"
                      style={{
                        backgroundColor:
                          booking.status === "Confirmed"
                            ? "#28a745"
                            : "#dc3545",
                        color: "#fff",
                        padding: "10px 15px",
                        fontSize: "0.9rem",
                        borderRadius: "20px",
                      }}
                    >
                      {booking.status}
                    </span>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#f8c94b",
                      }}
                    >
                      {booking.price}
                    </span>
                  </div>
                </div>
                <div className="card-footer text-center bg-light">
                  <button
                    className="btn btn-outline-primary w-100"
                    style={{
                      borderRadius: "20px",
                      fontWeight: "600",
                    }}
                    onClick={() =>
                      navigate("/details", { state: { booking } })
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted">
            <p>No bookings found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;
