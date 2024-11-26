import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedHotels = () => {
  const hotels = [
    { id: 1, name: 'Hotel Paradise', location: 'Bali', price: '$120/night', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Ocean View', location: 'Lombok', price: '$95/night', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Mountain Retreat', location: 'Bandung', price: '$110/night', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Featured Hotels</h2>
      <div className="row">
        {hotels.map((hotel) => (
          <div className="col-md-4 mb-3" key={hotel.id}>
            <div className="card">
              <img src={hotel.image} className="card-img-top" alt={hotel.name} />
              <div className="card-body">
                <h5 className="card-title">{hotel.name}</h5>
                <p className="card-text">{hotel.location}</p>
                <p className="text-primary fw-bold">{hotel.price}</p>
                {/* <button className="btn btn-primary">View Details</button> */}
                <Link to={`/hotel-detail`} className="btn btn-primary">View Details</Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedHotels;
