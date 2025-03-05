import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

function MostSearchedItems() {
  const { mainCartPrices } = useContext(AppContext);

  return (
    <div className="default-div custom-border rounded p-3 my-3 default-text">
      <div className="d-flex">
        <h5>Cost of your favorite items</h5>
        <FontAwesomeIcon className="ms-2 mt-1" icon={faDollarSign} />
      </div>
      {mainCartPrices.length < 1 ? (
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="loader">...</div>
        </div>
      ) : (
        mainCartPrices.map((item) => (
          <li key={item.shop}>
            {item.shop.charAt(0).toUpperCase() + item.shop.slice(1)},{' '}
            {item.price} €.
          </li>
        ))
      )}
    </div>
  );
}

export default MostSearchedItems;
