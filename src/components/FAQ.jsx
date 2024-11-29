import React, { useState } from "react";
import "../styles/faq.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in starts at 3 PM and check-out is until 11 AM. Early check-in and late check-out are subject to availability.",
  },
  {
    question: "Can I cancel my reservation for free?",
    answer: "Cancellations are free if made 48 hours before your check-in date. Otherwise, a one-night stay fee may apply.",
  },
  {
    question: "Is breakfast included in the booking price?",
    answer: "Yes, a complimentary breakfast is included in all our room rates.",
  },
  {
    question: "Do you have parking facilities?",
    answer: "Yes, we offer free secure parking for all our guests.",
  },
  {
    question: "Are pets allowed in the hotel?",
    answer: "Unfortunately, pets are not allowed in the hotel premises except for service animals.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-header"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="faq-question">{item.question}</h3>
                <div className="faq-icon">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              <div
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? "150px" : "0",
                  opacity: activeIndex === index ? 1 : 0,
                  transition: "all 0.3s ease",
                }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
