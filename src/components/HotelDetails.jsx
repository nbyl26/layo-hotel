import React from 'react';

const HotelDetails = ({ hotel }) => {
  return (
    <div className="container my-5">
      <h2>About {hotel.name}</h2>
      <p>{hotel.description}</p>

      <h3>Facilities</h3>
      <ul className="list-unstyled">
        {hotel.facilities.map((facility, index) => (
          <li key={index}>
            <i className="bi bi-check-circle text-success"></i> {facility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelDetails;
