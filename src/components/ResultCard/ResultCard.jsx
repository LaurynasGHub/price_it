import React from 'react';

import './resultCard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function ResultCard({ title, price, product }) {
  const addToCart = () => {
    console.log(product);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 col-sm-8 col-md-8">
          <p className="mb-2">{title}</p>
        </div>
        <div className="col-3 col-sm-2 col-md-2 price-p">
          <p>{price} €</p>
        </div>
        <div className="col-3 col-sm-2 col-md-2">
          <button
            className="non-styled-item underline-button default-text"
            onClick={() => addToCart()}
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
