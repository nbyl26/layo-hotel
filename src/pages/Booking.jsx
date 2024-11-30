import { FaCalendarAlt, FaUsers, FaUser, FaEnvelope } from "react-icons/fa"; 
import { useState } from "react";

const Booking = () => {
    const [formData, setFormData] = useState({
        roomType: '',
        name: '',
        email: '',
        date: '',
        duration: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const reservationData = {
            roomTitle: formData.roomType,
            roomPrice: formData.roomType === "Meeting Room 1" ? "Rp 7.000.000/day" :
                formData.roomType === "Conference Hall" ? "Rp 30.000.000/day" : "Rp 100.000.000/day",
            roomImage: formData.roomType === "Meeting Room 1" ? "/src/assets/images/Meeting-Room.jpg" :
                formData.roomType === "Conference Hall" ? "/src/assets/images/Conference-Hall.jpg" : "/src/assets/images/Wedding-Ballroom.jpg",
            checkInDate: formData.date,
            checkOutDate: formData.date,
            guests: formData.duration,
        };

        try {
            const response = await fetch("http://localhost:3001/reservations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reservationData),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage("Reservation successful!");
            } else {
                setMessage(result.message || "Failed to make a reservation.");
            }
        } catch (error) {
            console.error(error);
            setMessage("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container my-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <h2 className="text-center mb-4" style={{ color: "#007bff", fontWeight: "800", fontSize: "2.5rem" }}>
                Booking Your Event
            </h2>
            <form onSubmit={handleSubmit} style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px", backgroundColor: "#f9f9f9" }}>
                <div className="mb-4">
                    <label className="form-label d-flex align-items-center" style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                        <FaUsers className="me-2" style={{ fontSize: "1.5rem", color: "#007bff" }} />
                        Room Type
                    </label>
                    <select
                        name="roomType"
                        className="form-control shadow-sm border-0"
                        value={formData.roomType}
                        onChange={handleChange}
                        style={{ paddingLeft: "40px" }} // Space for icon
                    >
                        <option value="">Select a Room</option>
                        <option value="Meeting Room 1">Meeting Room 1</option>
                        <option value="Conference Hall">Conference Hall</option>
                        <option value="Wedding Ballroom">Wedding Ballroom</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="form-label d-flex align-items-center" style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                        <FaUser className="me-2" style={{ fontSize: "1.5rem", color: "#007bff" }} />
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control shadow-sm border-0"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ paddingLeft: "40px" }} // Space for icon
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label d-flex align-items-center" style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                        <FaEnvelope className="me-2" style={{ fontSize: "1.5rem", color: "#007bff" }} />
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control shadow-sm border-0"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ paddingLeft: "40px" }} // Space for icon
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label d-flex align-items-center" style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                        <FaCalendarAlt className="me-2" style={{ fontSize: "1.5rem", color: "#007bff" }} />
                        Event Date
                    </label>
                    <input
                        type="date"
                        name="date"
                        className="form-control shadow-sm border-0"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        style={{ paddingLeft: "40px" }} // Space for icon
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label d-flex align-items-center" style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                        <FaUsers className="me-2" style={{ fontSize: "1.5rem", color: "#007bff" }} />
                        Duration (in hours)
                    </label>
                    <input
                        type="number"
                        name="duration"
                        className="form-control shadow-sm border-0"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                        style={{ paddingLeft: "40px" }} // Space for icon
                    />
                </div>

                <button type="submit" className="btn btn-primary d-block mx-auto mt-3" disabled={loading} style={{ width: "200px", padding: "10px 20px", fontSize: "1.2rem", borderRadius: "5px" }}>
                    {loading ? "Booking..." : "Submit Booking"}
                </button>
            </form>

            {message && (
                <div className="alert alert-info mt-4">
                    {message}
                </div>
            )}
        </div>
    );
};

export default Booking;
