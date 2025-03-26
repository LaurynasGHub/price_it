import { useRef, useState } from 'react';

import { cfg } from '../../cfg/cfg';

function RegisterForm() {
  const getRegisterUsername = useRef();
  const getRegisterPassword = useRef();
  const [registerError, setRegisterError] = useState();
  const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    const username = getRegisterUsername.current.value;
    const password = getRegisterPassword.current.value;

    if (username === '' || password === '') {
      setRegisterError("Username or password can't be empty");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${cfg.API.HOST}/user/register`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },

        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setRegisterError('Something went wrong');
        throw new Error(response);
      } else {
        setRegisterError('Successfully registered!');
      }
    } catch (error) {
      setRegisterError('Username already exists');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="default-div default-text">
      <form>
        <p className="">Please enter your desired username:</p>
        <input
          type="text"
          id="userName"
          placeholder="user name"
          className="non-styled-item underline-input default-text"
          ref={getRegisterUsername}
        ></input>
        <p className="mt-4">Choose a strong password:</p>
        <input
          type="password"
          id="password"
          placeholder="password"
          autoComplete="on"
          className="non-styled-item underline-input default-text"
          ref={getRegisterPassword}
        ></input>
      </form>
      <div className="error-message my-3">{registerError}</div>
      <div className="user-login-register">
        <button
          type="button"
          className="underline-button non-styled-item default-text"
          onClick={registerUser}
        >
          {loading ? <div className="loader pb-3">...</div> : 'Register'}
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
