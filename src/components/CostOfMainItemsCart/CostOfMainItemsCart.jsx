import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

function MostSearchedItems() {
  const { mainCartData, setMainCartData } = useContext(AppContext);
  const { mainCartPrices, setMainCartPrices } = useContext(AppContext);

  return (
    <div className="default-div custom-border rounded p-3 my-3 default-text">
      <h5>Cost of main products cart:</h5>
      <p>
        Main products cart consists of the main everyday items: milk, bread,
        butter...
      </p>
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
