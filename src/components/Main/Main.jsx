import React from 'react';

import SearchCard from '../SearchCard/SearchCard';

import './main.scss';

function Main() {
  return (
    <div className="default-div p-2">
      {/* <h4 className="default-text">Welcome to Price it</h4> */}
      <SearchCard />
    </div>
  );
}

export default Main;
