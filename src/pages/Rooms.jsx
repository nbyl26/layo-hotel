import React from "react";

const Rooms = () => {
  const rooms = [
    {
      title: "Deluxe Room",
      image: "https://via.placeholder.com/600x400",
      price: "$150/night",
    },
    {
      title: "Suite Room",
      image: "https://via.placeholder.com/600x400",
      price: "$250/night",
    },
    {
      title: "Family Room",
      image: "https://via.placeholder.com/600x400",
      price: "$200/night",
    },
  ];

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
              <div className="card-img-container" style={{ position: "relative", height: "250px" }}>
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
              <div className="card-body text-center" style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
                <h5 className="card-title" style={{ color: "#007bff" }}>
                  {room.title}
                </h5>
                <p style={{ color: "#555" }}>{room.price}</p>
                <button
                  className="btn btn-primary"
                  style={{
                    borderRadius: "30px",
                    padding: "10px 25px",
                    fontWeight: "600",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
