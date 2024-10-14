import { useState, useEffect } from 'react';

function useLoggedIn() {
  // Helper function to safely retrieve and parse the 'loggedIn' value from localStorage
  const getInitialValue = () => {
    const storedValue = localStorage.getItem('loggedIn');
    // Return the parsed value or set it to false if it's not found or invalid
    return storedValue === 'true' ? true : false;
  };

  const [loggedIn, setLoggedIn] = useState(getInitialValue);

  // Update localStorage whenever loggedIn changes
  useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn);
  }, [loggedIn]);

  return [loggedIn, setLoggedIn];
}

export default useLoggedIn;
