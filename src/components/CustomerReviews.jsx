import React from 'react';

const CustomerReviews = ({ reviews }) => {
  return (
    <div className="container my-5">
      <h3>Customer Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review!</p>
      ) : (
        reviews.map((review, index) => (
          <div className="card my-3" key={index}>
            <div className="card-body">
              <h5 className="card-title">{review.name}</h5>
              <p className="card-text">{review.comment}</p>
              <p className="text-warning">{'⭐'.repeat(review.rating)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CustomerReviews;
