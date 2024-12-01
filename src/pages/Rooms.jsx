import React from "react";
import { Link } from "react-router-dom";

import DeluxeRoom from "../../public/images/Deluxe-Room.jpg";
import SuiteRoom from "../../public/images/Suite-Room.jpg";
import FamilyRoom from "../../public/images/Family-Room.jpg";
import PresidentialSuite from "../../public/images/Presidential-Suite.jpg";
import SingleRoom from "../../public/images/Single-Room.jpg";
import TwinRoom from "../../public/images/Twin-Room.jpg";

const rooms = [
  {
    title: "Deluxe Room",
    image: DeluxeRoom,
    price: "Rp 1.500.000/night",
    description: "A luxurious room with a king-sized bed and modern amenities.",
    features: ["King-size bed", "Ocean view", "Free WiFi", "Breakfast included"],
  },
  {
    title: "Suite Room",
    image: SuiteRoom,
    price: "Rp 2.500.000/night",
    description: "A spacious suite with separate living area and a balcony.",
    features: ["Separate living area", "Balcony", "Free WiFi", "Mini bar"],
  },
  {
    title: "Family Room",
    image: FamilyRoom,
    price: "Rp 2.000.000/night",
    description: "Perfect for families with two double beds and extra space.",
    features: ["Two double beds", "Extra space", "Free WiFi", "Family-friendly"],
  },
  {
    title: "Presidential Suite",
    image: PresidentialSuite,
    price: "Rp 5.000.000/night",
    description: "Experience the ultimate luxury with panoramic views and exclusive services.",
    features: [
      "Panoramic city view",
      "Private lounge access",
      "24-hour butler service",
      "Jacuzzi",
    ],
  },
  {
    title: "Twin Room",
    image: TwinRoom,
    price: "Rp 1.200.000/night",
    description: "A modern room with two single beds, perfect for friends or siblings.",
    features: ["Two single beds", "Free WiFi", "Flat-screen TV", "Room service"],
  },
  {
    title: "Single Room",
    image: SingleRoom,
    price: "Rp 750.000/night",
    description: "Cozy and comfortable room, ideal for solo travelers.",
    features: ["Single bed", "Free WiFi", "Work desk", "Complimentary tea/coffee"],
  },
];

const Rooms = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#007bff", fontWeight: "700" }}>
        Our Rooms
      </h2>
      <div className="row">
        {rooms.map((room, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card border-0 shadow-lg"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <div
                className="card-img-container"
                style={{ position: "relative", height: "250px" }}
              >
                <img
                  src={room.image}
                  className="card-img-top"
                  alt={room.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  className="card-img-overlay"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    opacity: "0",
                    transition: "opacity 0.3s ease",
                  }}
                ></div>
              </div>
              <div
                className="card-body text-center"
                style={{ padding: "20px", backgroundColor: "#f8f9fa" }}
              >
                <h5 className="card-title" style={{ color: "#007bff" }}>
                  {room.title}
                </h5>
                <p style={{ color: "#555" }}>{room.price}</p>
                <Link
                  to="/hotel-detail"
                  state={{ room }}
                  className="btn btn-primary"
                  style={{
                    borderRadius: "30px",
                    padding: "10px 25px",
                    fontWeight: "600",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
