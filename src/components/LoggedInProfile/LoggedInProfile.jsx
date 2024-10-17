import React from 'react';

// hooks
import useLoggedIn from '../../hooks/useLoggedIn';

function LoggedInProfile({ userId, onLogOut }) {
  const [loggedIn, setLoggedIn] = useLoggedIn();
  //
  // TODO
  // Get profile options by profile id from backend
  // Profile options:
  // Main items (items that are added to the cart, otherwise some default items)
  // Most searched items for account
  // Something more
  //
  return (
    <div className="default-div default-text m-4">
      loggedInProfile, {userId}
      <button onClick={() => onLogOut()}>Logout</button>
    </div>
  );
}

export default LoggedInProfile;
