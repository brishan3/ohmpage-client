import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import HeaderNav from './components/HeaderNav/HeaderNav';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
