import React from 'react';

const HotelBanner = ({ hotel }) => {
  return (
    <div
      className="hotel-banner text-center text-light"
      style={{
        backgroundImage: `url(${hotel.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>{hotel.name}</h1>
      <p>{hotel.location}</p>
    </div>
  );
};

export default HotelBanner;
