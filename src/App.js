import {React, useState} from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import HeaderNav from './components/HeaderNav/HeaderNav';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import LinksPage from './pages/LinksPage/LinksPage';
import testBackground from './assets/images/testBackground.png';



function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme( theme === 'light' ? 'dark' : 'light' )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav
          theme={theme}
          />
        <HomePage
          theme={theme}
          toggleTheme={toggleTheme}
          />
      </BrowserRouter>
    </div>
  );
}

export default App;
