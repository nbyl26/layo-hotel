import React from "react";
import "../styles/testimonials.css";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "The service was top-notch, and the rooms were incredibly cozy! Highly recommended for a luxurious stay.",
    rating: 5,
    image: "path-to-image1.jpg", 
    date: "Stayed: November 2024",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Beautiful hotel with amazing facilities. The staff were friendly and attentive, making our vacation perfect.",
    rating: 4.5,
    image: "path-to-image2.jpg", 
    date: "Stayed: October 2024",
  },
  {
    id: 3,
    name: "Michael Johnson",
    review:
      "From the clean rooms to the delicious meals, everything exceeded our expectations. Definitely coming back!",
    rating: 5,
    image: "path-to-image3.jpg",
    date: "Stayed: September 2024",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section" style={{ padding: "50px 20px" }}>
      <div className="container">
        <h2 className="section-title">What Our Guests Say</h2>
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
