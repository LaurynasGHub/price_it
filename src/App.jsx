// import logo from './logo.svg';
import React from 'react';
import useLocalStorage from 'use-local-storage';
//components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

import './app.scss';
import './index.scss';

function App() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <div className="App h-100 w-100" data-theme={isDark ? 'dark' : 'light'}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
