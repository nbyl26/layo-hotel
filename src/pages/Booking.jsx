import React, { useState } from 'react';

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

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
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
      checkOutDate: formData.date, // You can modify this logic to accommodate a check-out date if needed
      guests: formData.duration, // Modify this if the duration doesn't relate to the number of guests
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
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Room Type</label>
          <select
            name="roomType"
            className="form-control"
            value={formData.roomType}
            onChange={handleChange}
          >
            <option value="">Select a Room</option>
            <option value="Meeting Room 1">Meeting Room 1</option>
            <option value="Conference Hall">Conference Hall</option>
            <option value="Wedding Ballroom">Wedding Ballroom</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Duration (in hours)</label>
          <input
            type="number"
            name="duration"
            className="form-control"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary d-block mx-auto mt-3" disabled={loading}>
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
