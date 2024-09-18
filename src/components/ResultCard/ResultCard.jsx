import React from 'react';

import './resultCard.scss';

function ResultCard({ title, price }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-9 col-sm-10 col-md-10">
          <p className="mb-2">{title}</p>
        </div>
        <div className="col-3 col-sm-2 col-md-2 price-p">
          <p>{price} €</p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
