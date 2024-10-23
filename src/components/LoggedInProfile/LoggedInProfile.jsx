import { useEffect, useState } from 'react';

import { cfg } from '../../cfg/cfg';

// components
import OptionCard from '../OptionCard/OptionCard';

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
  const [userName, setUserName] = useState('');

  const getProfileOptions = async () => {
    try {
      const response = await fetch(`${cfg.API.HOST}/options?id=${userId}`, {
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

  const getUserName = async () => {
    setUserName('Loading...');
    try {
      const response = await fetch(
        `${cfg.API.HOST}/user/username?id=${userId}`,
        {
          method: 'GET',
          headers: {
            'Content-type': 'Application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      if (response === '') {
        throw new Error('There are no user with such id');
      }

      const username = await response.json();

      setUserName(username);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProfileOptions();
    getUserName();
  }, []);

  return (
    <div className="default-div default-text m-4">
      Hello {userName}
      <button
        className="non-styled-item underline-button default-text p-2 m-2"
        onClick={() => onLogOut()}
      >
        Logout
      </button>
      <div>
        <p>Profile options</p>
        <p>Main items</p>
        {profileOptions.length > 0 ? (
          profileOptions.map((item) => <OptionCard option={item} />)
        ) : (
          <p>No options</p>
        )}
      </div>
      <button onClick={() => getProfileOptions()}>Refresh options</button>
    </div>
  );
}

export default LoggedInProfile;
