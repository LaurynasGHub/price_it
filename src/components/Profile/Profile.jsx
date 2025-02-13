import { useContext, useRef, useState } from 'react';

import { cfg } from '../../cfg/cfg';

// hooks
import useLoggedIn from '../../hooks/useLoggedIn';

// components
import LoggedInProfile from '../LoggedInProfile/LoggedInProfile';
import RegisterForm from '../RegisterForm/RegisterForm';

import './profile.scss';
import { AppContext } from '../../context/AppContext';

function Profile() {
  const getPassword = useRef();
  const getUsername = useRef();

  const [loggedIn, setLoggedIn] = useLoggedIn();
  const [loading, setLoading] = useState();
  const [logInError, setLogInError] = useState();
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const { userID, setUserID } = useContext(AppContext);

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
        },

        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setLogInError('username or password is incorrect');
        // throw new Error('username or password is incorrect');
      } else {
        setLogInError('');

        const user = await response.json();

        // add logged in status to localStorage
        localStorage.setItem('loggedIn', 'true');

        // set userID using appContext
        setUserID(user);

        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    setUserID('');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userID');
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
              className="underline-input p-2 default-text"
              ref={getUsername}
            ></input>
            <input
              type="password"
              id="password"
              placeholder="password"
              autoComplete="on"
              className="underline-input p-2 default-text"
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
            {!showRegisterForm ? (
              <div className="d-inline-flex">
                <p className="mb-0">Not a member yet?</p>
                <button
                  className="underline-button default-text non-styled-item"
                  onClick={() => setShowRegisterForm(true)}
                >
                  Register
                </button>
              </div>
            ) : (
              <div>
                <RegisterForm />
                <button
                  className="underline-button default-text non-styled-item mt-2"
                  onClick={() => setShowRegisterForm(false)}
                >
                  Hide register form
                </button>
              </div>
            )}
          </div>
          <div className="mt-2">
            <p className="mb-0">Why should you register?</p>
            <p className="mb-0">• Add your own search terms to the main cart</p>
          </div>
        </div>
      ) : (
        <div>
          <LoggedInProfile userId={userID} onLogOut={handleLogOut} />
        </div>
      )}
    </div>
  );
}

export default Profile;
