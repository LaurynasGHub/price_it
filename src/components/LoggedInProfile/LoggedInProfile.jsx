import { useEffect, useState } from 'react';

import { cfg } from '../../cfg/cfg';

function LoggedInProfile({ userId, onLogOut }) {
  //
  // TODO
  // Get profile options by profile id from backend
  // Profile options:
  // Main items (items that are added to the cart, otherwise some default items)
  // Most searched items for account
  // Something more
  //
  const [profileOptions, setProfileOptions] = useState([]);

  const getProfileOptions = async () => {
    try {
      const response = await fetch(`${cfg.API.HOST}/options/${userId}`, {
        method: 'GET',
        headers: {
          'Content-type': 'Application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      if (response === '') {
        throw new Error('There are no options');
      }

      const options = await response.json();

      setProfileOptions(options.mainProducts);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProfileOptions();
  }, []);

  return (
    <div className="default-div default-text m-4">
      loggedInProfile, {userId}
      <button onClick={() => onLogOut()}>Logout</button>
      <div>
        <p>Profile options</p>
        <p>Main items</p>
        <div>
          {profileOptions.length > 0 ? (
            profileOptions.map((item) => <p key={item.name}>{item}</p>)
          ) : (
            <p>No options</p>
          )}
        </div>
      </div>
      <button onClick={() => getProfileOptions()}>Refresh options</button>
    </div>
  );
}

export default LoggedInProfile;
