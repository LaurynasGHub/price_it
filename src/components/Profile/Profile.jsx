import React, { useRef, useState } from 'react';

import { cfg } from '../../cfg/cfg';

// components
import LoggedInProfile from '../LogedInProfile/LoggedInProfile';

import './profile.scss';

function Profile() {
  const getPassword = useRef();
  const getUsername = useRef();
  const [loading, setLoading] = useState();
  const [logInError, setLogInError] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userID, setUserID] = useState();

  const handleLogIn = async (e) => {
    e.preventDefault();

    const username = getUsername.current.value;
    const password = getPassword.current.value;

    try {
      setLoading(true);

      const response = await fetch(`${cfg.API.HOST}/user/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',

          Authorization: 'Bearer token',
        },

        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setLogInError('username or password is incorrect');
        throw new Error('username or password is incorrect');
      } else {
        setLogInError('');
        const user = await response.json();
        setUserID(user);
        //
        // TODO
        // Add logged in to cookies, so it would remain
        //
        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <div className="default-div default-text p-4 text-center profile-main-div">
          <form className="profile-form">
            <input
              type="text"
              id="userName"
              placeholder="user name"
              className="profile-input p-2 default-text"
              ref={getUsername}
            ></input>
            <input
              type="password"
              id="password"
              placeholder="password"
              autoComplete="on"
              className="profile-input p-2 default-text"
              ref={getPassword}
            ></input>
          </form>
          <div className="error-message mt-3">{logInError}</div>
          <div className="m-3">
            <button
              className="underline-button default-text non-styled-item"
              onClick={handleLogIn}
            >
              Log in
            </button>
          </div>
          <div className="register-div">
            <p className="mb-0">Not a member yet?</p>
            <button className="underline-button default-text non-styled-item">
              Register
            </button>
          </div>
        </div>
      ) : (
        <LoggedInProfile userId={userID} />
      )}
    </div>
  );
}

export default Profile;
