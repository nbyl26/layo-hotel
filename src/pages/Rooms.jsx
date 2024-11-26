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
            <div className="card border-0 shadow-sm">
              <img src={room.image} className="card-img-top" alt={room.title} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#007bff" }}>
                  {room.title}
                </h5>
                <p>{room.price}</p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
