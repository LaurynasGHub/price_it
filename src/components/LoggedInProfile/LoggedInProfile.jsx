import { useEffect, useState } from 'react';

import { cfg } from '../../cfg/cfg';

// components
import OptionCard from '../OptionCard/OptionCard';
import Popover from '../Popover/Popover';

function LoggedInProfile({ userId, onLogOut }) {
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

  const popOverText = `These are your main items. They are used tocalculate the cost of the main products cart. If You don't provide any, the default are used.`;

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
        <h5>Main items:</h5>
        <Popover buttonText={'Info'} text={popOverText} />
        {profileOptions.length > 0 ? (
          profileOptions.map((item) => <OptionCard option={item} key={item} />)
        ) : (
          <p>No options</p>
        )}
      </div>
      <button className="non-styled-item underline-button default-text">
        Add option
      </button>
      <button
        className="non-styled-item underline-button default-text"
        onClick={() => getProfileOptions()}
      >
        Refresh options
      </button>
    </div>
  );
}

export default LoggedInProfile;
