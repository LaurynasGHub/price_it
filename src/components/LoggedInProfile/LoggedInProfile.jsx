import { useEffect, useState, useRef } from 'react';

import { cfg } from '../../cfg/cfg';

// components
import OptionCards from '../OptionCards/OptionCards';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function LoggedInProfile({ userId, onLogOut }) {
  const [profileOptions, setProfileOptions] = useState([]);
  const [userName, setUserName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const getProduct = useRef();

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

  const addNewOption = async () => {
    const product = getProduct.current.value;
    console.log(product);

    try {
      const response = await fetch(`${cfg.API.HOST}/options/create`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },

        body: JSON.stringify({ userID: userId, product: product }),
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

  const popOverText = `These are your main items. They are used to calculate the cost of the main products cart. If You don't provide any, the default are used.`;

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
        <div className="d-flex flex-column">
          <div className="d-flex">
            <h5 className="">Main items:</h5>
            <button
              onClick={() => setShowPopup(!showPopup)}
              className="non-styled-item default-text"
            >
              <FontAwesomeIcon className="mb-1" icon={faCircleInfo} />
            </button>
          </div>
          {showPopup ? <p className="info-text">{popOverText}</p> : null}
        </div>
        {profileOptions.length > 0 ? (
          OptionCards({ options: profileOptions })
        ) : (
          <p>No options</p>
        )}
      </div>
      <div className="my-4">
        <input
          type="text"
          id="option"
          placeholder="New option"
          className="non-styled-item border-bottom m-2 default-text"
          ref={getProduct}
        ></input>
        <button
          className="non-styled-item underline-button default-text"
          onClick={() => addNewOption()}
        >
          Add option
        </button>
      </div>
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
