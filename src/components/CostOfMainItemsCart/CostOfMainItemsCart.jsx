import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function MostSearchedItems() {
  const { mainCartData, setMainCartData } = useContext(AppContext);
  const { mainCartPrices, setMainCartPrices } = useContext(AppContext);

  function showData() {
    console.log(mainCartPrices);
  }
  return (
    <div className="default-div custom-border rounded p-3 my-3 default-text">
      <h5>Cost of main products cart:</h5>
      <p>
        Main products cart consists of the main everyday items: milk, bread,
        butter...
      </p>
      {mainCartPrices.map((item) => (
        <li key={item.shop}>{item.shop}</li>
      ))}
    </div>
  );
}

export default MostSearchedItems;
