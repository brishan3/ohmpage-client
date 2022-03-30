import './HomePage.scss';
import testBackground from '../../assets/images/testBackground.png';
import testBackground2 from '../../assets/images/testBackground2.jpg';
import { useState, useEffect } from 'react';
import LinksPage from '../LinksPage/LinksPage';
import { Route, Switch } from 'react-router-dom';
import MainSearch from '../../components/MainSearch/MainSearch';
import SettingsPage from '../SettingsPage/SettingsPage';
import axios from 'axios';


function HomePage() {
  const [background, setBackground] = useState(testBackground2);
  const [ linksList, setLinks ] = useState([]);

  const getLinks = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/links`)
      .then((res) => {
        console.log(res.data);
        setLinks(res.data);
      })
      .catch((err) => {
        console.log(err);
        return [];
      })
  };

  useEffect(() => {
    getLinks()
  }, [])

  // useEffect(() => {
    // console.log(linksList);
  // })

  return (
    <main className="main" style={{backgroundImage: `url(${background})`}}>
      <Switch>
        <Route path="/" exact component={(routerProps) => (
          <MainSearch linksList={linksList} {...routerProps}/>
        )}/>
        <Route path="/linklibrary" component={(routerProps) => (
          <LinksPage linksList={linksList} {...routerProps}/>
        )}/>
        <Route path="/settings" component={SettingsPage}/>
      </Switch>
    </main>
  )
}

function getLinks() {
  axios
    .get(`${process.env.REACT_APP_API_URL}/links`)
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    })
}

export default HomePage;