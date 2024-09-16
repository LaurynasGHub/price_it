import React from 'react';

function MostSearchedItems() {
  function getCartData() {
    //
    // Function should return cost of main everyday items
    //
    // Main everyday items- milk, bread, butter, etc.
    //
  }
  return (
    <div className="default-div custom-border rounded p-3 mt-2 default-text">
      <h5>Cost of main products cart:</h5>
      <p>
        Main products cart consists of the main everyday items: milk, bread,
        butter...
      </p>
      <li>1. Norfa- 30$</li>
      <li>2. Maxima- 35$</li>
      <li>3. Lidl- 37$</li>
      <li>4. Iki- 42$</li>
      <li>5. Rimi- 54$</li>
    </div>
  );
}

export default MostSearchedItems;
