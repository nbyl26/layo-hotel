import React from "react";
import { useLocation } from "react-router-dom";

const HotelDetail = () => {
  const location = useLocation();
  const room = location.state.room; 

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={room.image}
            alt={room.title}
            className="img-fluid rounded shadow-lg"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-primary mb-4" style={{ fontWeight: "700" }}>
            {room.title}
          </h2>
          <p style={{ color: "#555", fontSize: "1.1rem" }}>{room.description}</p>
          <p className="text-success" style={{ fontSize: "1.25rem", fontWeight: "600" }}>
            {room.price}
          </p>
          <div className="mt-4">
            <h5>Room Features:</h5>
            <ul className="list-group">
              {room.features.map((feature, index) => (
                <li key={index} className="list-group-item" style={{ backgroundColor: "#f8f9fa" }}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <form className="mt-4">
            <div className="mb-3">
              <label htmlFor="checkInDate" className="form-label">Check-in Date</label>
              <input type="date" className="form-control" id="checkInDate" />
            </div>
            <div className="mb-3">
              <label htmlFor="checkOutDate" className="form-label">Check-out Date</label>
              <input type="date" className="form-control" id="checkOutDate" />
            </div>
            <div className="mb-3">
              <label htmlFor="guests" className="form-label">Guests</label>
              <input type="number" className="form-control" id="guests" placeholder="Number of guests" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "12px", fontWeight: "600", borderRadius: "30px" }}>
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
