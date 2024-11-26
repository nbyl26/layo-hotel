import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking successful!');
  };

  return (
    <div className="container my-5">
      <h3>Book Your Stay</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="checkIn" className="form-label">
            Check-In Date
          </label>
          <input
            type="date"
            className="form-control"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="checkOut" className="form-label">
            Check-Out Date
          </label>
          <input
            type="date"
            className="form-control"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="guests" className="form-label">
            Number of Guests
          </label>
          <input
            type="number"
            className="form-control"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
