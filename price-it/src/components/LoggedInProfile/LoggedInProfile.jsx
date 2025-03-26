import { useEffect, useState, useRef, useContext } from 'react';

import { cfg } from '../../cfg/cfg';

// components
import OptionCards from '../OptionCards/OptionCards';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../context/AppContext';

function LoggedInProfile({ userId, onLogOut }) {
  // const [profileOptions, setProfileOptions] = useState([]);
  // const [userName, setUserName] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [optionText, setOptionText] = useState('New favorite');
  const [isMobile, setIsMobile] = useState(false);
  const [errorText, setErrorText] = useState('');
  const getProduct = useRef();

  const { profileOptions, setProfileOptions, userID, userName } =
    useContext(AppContext);

  useEffect(() => {
    //if window size is below 600px gives true
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    handleResize();
    // Remove event listener- prevents memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const getProfileOptions = async () => {
  //   try {
  //     const response = await fetch(`${cfg.API.HOST}/options?id=${userId}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-type': 'Application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error('Something went wrong');
  //     }

  //     if (response === '') {
  //       throw new Error('There are no options');
  //     }

  //     const options = await response.json();

  //     setProfileOptions(options.mainProducts);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const addNewOption = async () => {
    if (getProduct.current.value === '') {
      setOptionText(`Input can't be empty!`);

      setTimeout(() => {
        setOptionText('New option');
      }, 3000);

      return;
    }

    const product = getProduct.current.value;

    try {
      const response = await fetch(`${cfg.API.HOST}/options/create`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },

        body: JSON.stringify({ userID: userID, product: product }),
      });

      // console.log(response);

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const options = await response.json();

      // this part updates the options screen and rerenders
      setProfileOptions(options.mainProducts);
    } catch (error) {
      setErrorText('Option already exists');

      setTimeout(() => {
        setErrorText('');
      }, 3000);

      console.log(error.message);
    }
  };

  const deleteOption = async (option) => {
    try {
      const response = await fetch(`${cfg.API.HOST}/options/delete`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },

        body: JSON.stringify({ userID: userId, product: option }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const options = await response.json();

      // this part updates the options screen and rerenders
      setProfileOptions(options.mainProducts);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const getUserName = async () => {
  //   setUserName('Loading...');
  //   try {
  //     const response = await fetch(
  //       `${cfg.API.HOST}/user/username?id=${userId}`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Content-type': 'Application/json',
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error('Something went wrong');
  //     }

  //     if (response === '') {
  //       throw new Error('There are no user with such id');
  //     }

  //     const username = await response.json();

  //     setUserName(username);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getUserName();
  //   // getProfileOptions();
  // }, [userID]);

  const popOverText = `These are your favorite items. They are used to calculate the cost of the favorite products cart. If You don't provide any, the default are used.`;

  return (
    <div className="default-div default-text m-4">
      <div className="custom-border rounded p-2 d-flex">
        <p className="m-2">{userName ? `Hello, ${userName}!` : 'Loading...'}</p>
        <button
          className="non-styled-item underline-button"
          onClick={() => onLogOut()}
        >
          Logout
        </button>
      </div>
      <div>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <h5 className="my-3 ms-2">Favorite items</h5>
            <button
              onClick={() => setShowPopup(!showPopup)}
              className="non-styled-item default-text"
            >
              <FontAwesomeIcon className="my-3" icon={faCircleInfo} />
            </button>
          </div>
          {showPopup ? <p className="info-text ms-2">{popOverText}</p> : null}
        </div>
        {profileOptions.length > 0 ? (
          OptionCards({
            options: profileOptions,
            deleteOptionFunction: deleteOption,
          })
        ) : (
          <p className="ms-2">No favorites, the defaults are used.</p>
        )}
      </div>
      <div className="my-4 custom-border rounded p-2 d-flex flex-wrap">
        <input
          type="text"
          id="option"
          placeholder={optionText}
          className="non-styled-item border-bottom default-text"
          ref={getProduct}
        ></input>
        <button
          className="non-styled-item underline-button default-text ms-3"
          onClick={() => addNewOption()}
        >
          Add new favorite
        </button>
        {errorText ? (
          <div className={isMobile ? 'mt-2 default-text' : 'ms-3 default-text'}>
            <p className="mb-0">{errorText}</p>
          </div>
        ) : null}
        {/* this button was used to test the option gathering from API */}
        {/* <button
          className="non-styled-item underline-button default-text"
          onClick={() => getProfileOptions()}
        >
          Refresh options
        </button> */}
      </div>
    </div>
  );
}

export default LoggedInProfile;
