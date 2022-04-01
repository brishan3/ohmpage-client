import './HomePage.scss';
import testBackground from '../../assets/images/testBackground.png';
import testBackground2 from '../../assets/images/testBackground2.jpg';
import { useState, useEffect, useMemo } from 'react';
import LinksPage from '../LinksPage/LinksPage';
import { Route, Switch } from 'react-router-dom';
import MainSearch from '../../components/MainSearch/MainSearch';
import SettingsPage from '../SettingsPage/SettingsPage';
import axios from 'axios';
import { createTheme } from '@mui/material';

//
// Renders all the main 
//
function HomePage({theme, toggleTheme}) {
  const [background, setBackground] = useState(testBackground2);
  const [ linksList, setLinks ] = useState([]);
  const [categorizedLinks, setCategorizedLinks] = useState({ entertainment: [], social: [], webTools: [], software: [], information: []  });

  const getLinks = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/links`)
      .then((res) => {
        setLinks(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLinks([]);
      })
  };

  const organizeLinks = () => {
    const categories = ["Entertainment", "Social", "Web Tools", "Software", "Information"];
    let categoriesArr = categories.map( category => {
      return linksList.filter((element) => element.category === category)
    })
    setCategorizedLinks(
      {
        entertainment: categoriesArr[0],
        social: categoriesArr[1],
        webTools: categoriesArr[2],
        software: categoriesArr[3],
        information: categoriesArr[4]
      }
    )
  }

  useEffect(() => {
    getLinks()
  }, [])

  useEffect(() => {
    organizeLinks()
  }, [linksList])

  return (
    <main className="main" style={{backgroundImage: `url(${background})`}}>
      <Switch>
        <Route path="/" exact component={(routerProps) => (
          <MainSearch
            links={categorizedLinks}
            theme={theme}
            {...routerProps}
          />
        )}/>
        <Route path="/linklibrary" component={(routerProps) => (
          <LinksPage
            linksList={linksList}
            theme={theme}
            {...routerProps}
          />
        )}/>
        <Route path="/settings" component={(routerProps) => (
          <SettingsPage
            theme={theme}
            toggleTheme={toggleTheme}
            {...routerProps}
          />
        )}/>
      </Switch>
    </main>
  )
}

export default HomePage;