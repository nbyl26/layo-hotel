import React from 'react';

import HotelBanner from '../components/HotelBanner';
import HotelDetails from '../components/HotelDetails';
import CustomerReviews from '../components/CustomerReviews';
import BookingForm from '../components/BookingForm';

const HotelDetail = () => {
  const hotel = {
    name: 'Ocean View',
    location: 'Lombok',
    image: 'https://via.placeholder.com/600x300',
    description: 'A luxurious seaside resort offering breathtaking ocean views.',
    facilities: ['Swimming Pool', 'Free Wi-Fi', 'Spa & Wellness Center', 'Restaurant', 'Bar'],
  };

  const reviews = [
    { name: 'Alice', comment: 'Great stay! Highly recommended.', rating: 5 },
    { name: 'Bob', comment: 'Beautiful place, but service could be better.', rating: 4 },
  ];

  return (
    <>
      <HotelBanner hotel={hotel} />
      <HotelDetails hotel={hotel} />
      <CustomerReviews reviews={reviews} />
      <BookingForm />
    </>
  );
};

export default HotelDetail;
