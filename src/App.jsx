import useLocalStorage from 'use-local-storage';
import { Routes, Route, Navigate } from 'react-router-dom';

//components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
// import Profile from './components/Profile/Profile';
import AlcoholMain from './components/AlcoholMain/AlcoholMain';

import './app.scss';
import './index.scss';

function App() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <Navbar />
      <Routes>
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/search_tool" element={<Main />} />
        <Route path="/alcohol_search_tool" element={<AlcoholMain />} />
        <Route path="*" element={<Navigate to="/search_tool" />} />
      </Routes>
    </div>
  );
}

export default App;
