import React from 'react';

function ResultCard({ title, price }) {
  return (
    <div>
      <h6>{title}</h6>
      <p>{price}</p>
    </div>
  );
}

export default ResultCard;
