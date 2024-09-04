// import logo from './logo.svg';
import React from 'react';
import useLocalStorage from 'use-local-storage';

import './App.css';
import Toggler from './components/theme_toggler/Toggler';

import './index.scss';

//components
import Main from './main/Main';

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
