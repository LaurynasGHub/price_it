import React from 'react';

function MostSearchedItems() {
  function getMostSearchedData() {
    // Function should get the most searched items from backend
    //
    // Backend function:
    // When item is searched check if that item is in JSON file;
    // JSON file- search_term- XX, times_searched- XX;
    // Get top 5 values from this JSON file;
    // return those 5 values;
    // Function should run when component gets loaded (mounts);
    // Use useEffect hook.
    //
  }
  return (
    <div className="default-div custom-border rounded p-3 my-3 default-text">
      <h5>Most popular searches:</h5>
      <li>1. Duona</li>
      <li>2. Pienas</li>
      <li>3. Ledai</li>
      <li>4. Sūris</li>
      <li>5. Agurkai</li>
    </div>
  );
}

export default MostSearchedItems;
