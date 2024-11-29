import React from "react";
import "../styles/testimonials.css";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

import Akram from '../assets/images/1.jpg';
import Fazri from '../assets/images/2.jpg';
import Fachry from '../assets/images/3.jpg';
import Adit from '../assets/images/4.jpg';

const testimonials = [
  {
    id: 1,
    name: "Akam Duyung",
    review:
      "Pelayanannya sangat baik dan kamarnya sangat mewah, Mantap!!",
    rating: 5,
    image: Akram, 
    date: "Stayed: November 2024",
  },
  {
    id: 2,
    name: "Zri Anon-mali",
    review:
      "Hotelnya sangat indah dan bersih, sangat direkomendasikan untuk liburan",
    rating: 4.5,
    image: Fazri, 
    date: "Stayed: October 2024",
  },
  {
    id: 3,
    name: "Ryy Kertapati",
    review:
      "Mulai dari kamar yang nyaman hingga makanan yang enak, semuanya sempurna cuyy",
    rating: 5,
    image: Fachry,
    date: "Stayed: September 2024",
  },
  {
    id: 4,
    name: "Adit Bohlam",
    review:
      "Bersih, nyaman, dan pelayanannya sangat ramah, sangat puas menginap disini",
    rating: 5,
    image: Adit,
    date: "Stayed: September 2024",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section" style={{ padding: "50px 20px" }}>
      <div className="container">
        <h3 className="section-title">What Our Guests Say</h3>
        <div className="testimonial-cards">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="card-header">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}`}
                  className="testimonial-image"
                />
                <div className="testimonial-info">
                  <h4 className="guest-name">{testimonial.name}</h4>
                  <p className="stay-date">{testimonial.date}</p>
                </div>
              </div>
              <div className="card-body">
                <FaQuoteLeft className="quote-icon" />
                <p className="review-text">{testimonial.review}</p>
              </div>
              <div className="card-footer">
                <div className="star-rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      color={index < testimonial.rating ? "#ffc107" : "#e4e5e9"}
                      size={20}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
