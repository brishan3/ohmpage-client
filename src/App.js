import {React, useState} from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import HeaderNav from './components/HeaderNav/HeaderNav';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import LinksPage from './pages/LinksPage/LinksPage';
import testBackground from './assets/images/testBackground.png';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/settings" component={SettingsPage}/>
          <Route path="/linklibrary" component={LinksPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
