import React from 'react';

import './resultCard.scss';

function ResultCard({ title, price }) {
  return (
    <div className="d-flex">
      <p>{title}</p>
      <p className="price-p">, {price} €</p>
    </div>
  );
}

export default ResultCard;
