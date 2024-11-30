import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    roomType: '',
    name: '',
    email: '',
    date: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // Kirim data ke backend atau simpan ke database
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
        <button type="submit" className="btn btn-primary d-block mx-auto mt-3">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
