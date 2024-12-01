import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, collection, getDocs } from "../firebase"; // Impor Firestore

const BookingHistory = () => {
    const [bookings, setBookings] = useState([]); // Data booking dari server
    const [search, setSearch] = useState("");
    const [filteredBookings, setFilteredBookings] = useState([]); // Data hasil filter pencarian
    const [loading, setLoading] = useState(true); // Indikator loading
    const navigate = useNavigate();

    // Fetch data dari Firestore
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                // Ambil koleksi reservations dari Firestore
                const querySnapshot = await getDocs(collection(db, 'reservations'));
                const bookingsData = [];
                querySnapshot.forEach((doc) => {
                    bookingsData.push({ id: doc.id, ...doc.data() }); // Menambahkan id dokumen dan data
                });
                setBookings(bookingsData);
                setFilteredBookings(bookingsData); // Inisialisasi filter data
            } catch (error) {
                console.error("Error fetching booking data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    // Fungsi pencarian
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
                        color: "#007bff",         
                        fontWeight: "800",         
                        fontSize: "2.5rem",        
                        letterSpacing: "1px",      
                        fontFamily: "'Poppins', sans-serif", 
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
            {loading ? (
                <div className="text-center">
                    <p>Loading bookings...</p>
                </div>
            ) : filteredBookings.length > 0 ? (
                <div className="row">
                    {filteredBookings.map((booking) => (
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
                                            className="badge bg-primary text-white"
                                            style={{
                                                padding: "10px 15px",
                                                fontSize: "0.9rem",
                                                borderRadius: "20px",
                                            }}
                                        >
                                            Confirmed
                                        </span>
                                        <span
                                            style={{
                                                fontWeight: "bold",
                                                color: "#f8c94b",
                                            }}
                                        >
                                            {booking.roomPrice}
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
                    ))}
                </div>
            ) : (
                <div className="text-center text-muted">
                    <p>No bookings found.</p>
                </div>
            )}
        </div>
    );
};

export default BookingHistory;
