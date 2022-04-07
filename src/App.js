import {React, useEffect, useState} from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import HeaderNav from './components/HeaderNav/HeaderNav';


//
// Renders the nav bar (HeaderNav) and main housing component (HomePage),
// Light/Dark theming is also handled and stored, where it then provided to
// all children
//
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme( newTheme )
    localStorage.setItem('ohmpageTheme', newTheme )
  }

  useEffect( () => {
    const userThemePreference = localStorage.getItem('ohmpageTheme') || 'light';
    if (userThemePreference && userThemePreference !== theme) {
      setTheme(userThemePreference);
    }
  }, []
  )

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
