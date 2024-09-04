// import logo from './logo.svg';
import React from 'react';
import useLocalStorage from 'use-local-storage';
//components
import Toggler from './components/Theme_toggler/Toggler';

import './app.scss';
import './index.scss';

//components
import Main from './components/Main/Main';

function App() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <Toggler isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <Main />
    </div>
  );
}

export default App;
