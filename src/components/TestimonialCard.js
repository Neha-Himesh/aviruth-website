// src/components/TestimonialCard.js
import React from 'react';

function TestimonialCard({ stars, text, name, qualification }) {
  const totalStars = parseInt(stars) + 1;
  return (
    <div className="card shadow">
      <div className="p-2">
        {[...Array(totalStars)].map((_, i) => (
          <span
            key={i}
            className={`fa fa-star ${i < stars ? 'checked' : ''}`}
          ></span>
        ))}
      </div>
      <p className="p-2">{text}</p>
      <h5 className="p-2 py-0">{name}</h5>
      <h6 className="px-2 py-0 text-secondary">{qualification}</h6>
    </div>
  );
}

export default TestimonialCard;