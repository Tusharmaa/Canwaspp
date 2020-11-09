import React from "react";
import "./Review.css";

function Review({ name, review, rate, time }) {
  return (
    <div className="review">
      <p className="review-Name">
        <b>
          <span>{name} |</span>
        </b>
        <p>{time}</p>
      </p>
      <div className="review-Rate">
        <p>RATING:</p>
        <div className="review-RateRating">
          <p>{rate}</p>
        </div>
      </div>
      <p className="review-Comment">
        <span>{review}</span>
      </p>
    </div>
  );
}

export default Review;
