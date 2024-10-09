import React, { useRef } from 'react';

import './profile.scss';

function Profile() {
  const getRegisterUsername = useRef();
  const getRegisterPassword = useRef();

  return (
    <div className="default-div default-text p-4 text-center profile-main-div">
      <form className="profile-form">
        <input
          type="text"
          id="userName"
          placeholder="user name"
          className="profile-input p-2 default-text"
          ref={getRegisterUsername}
        ></input>

        <input
          type="password"
          id="password"
          placeholder="password"
          autoComplete="on"
          className="profile-input p-2 default-text"
          ref={getRegisterPassword}
        ></input>
      </form>
      <div className="m-3">
        <button className="underline-button default-text non-styled-item">
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
  );
}

export default Profile;
