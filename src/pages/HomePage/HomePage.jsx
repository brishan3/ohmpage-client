import './HomePage.scss';
import { useState, useEffect } from 'react';
import LinksPage from '../LinksPage/LinksPage';
import { Route, Switch } from 'react-router-dom';
import MainSearch from '../../components/MainSearch/MainSearch';
import SettingsPage from '../SettingsPage/SettingsPage';
import axios from 'axios';

//
// Renders all the main 
//
function HomePage({ theme, toggleTheme }) {
  const [background, setBackground] = useState();
  const [backgroundList, setBackgroundList] = useState([])
  const [linksList, setLinks ] = useState([]);
  const [categorizedLinks, setCategorizedLinks] = useState({ entertainment: [], social: [], webTools: [], software: [], information: []  });
  const [searchEngine, setSearchEngine] = useState({name: "Google", url: "https://www.google.com/search"})

  const changeSearchHandler = ( searchObj ) => {
    setSearchEngine(searchObj);
    localStorage.setItem('ohmpageSearchEngine', JSON.stringify(searchObj));
  }

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

  const changeBackgroundHandler = (url) => {
    const newBackground = process.env.REACT_APP_API_URL + '/' + url;
    setBackground(newBackground);
    localStorage.setItem('ohmpageBackground', newBackground)
  }

  const getBackgrounds = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/backgrounds`)
      .then((res) => {
        setBackgroundList(res.data);
      })
      .catch((err) => {
        console.log(err);
        setBackgroundList([]);
      })
  }

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
    getBackgrounds()
    const userBackgroundPreference = localStorage.getItem('ohmpageBackground') || `${process.env.REACT_APP_API_URL}/default.png`;
    const userSearchPreference = JSON.parse(localStorage.getItem('ohmpageSearchEngine')) || searchEngine;
    if (userBackgroundPreference && userBackgroundPreference !== background) {
      setBackground(userBackgroundPreference);
    }
    if (userSearchPreference && userSearchPreference !== searchEngine ) {
      setSearchEngine(userSearchPreference);
    }
  }, [])

  useEffect(() => {
    organizeLinks()
  }, [linksList])

  return (
    <main className="main" style={{ backgroundImage: `url(${background})` }}>
      <Switch>
        <Route path="/" exact component={(routerProps) => (
          <MainSearch
            links={categorizedLinks}
            theme={theme}
            searchEngine={searchEngine}
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
            backgroundList={backgroundList}
            changeBackgroundHandler={changeBackgroundHandler}
            searchEngine={searchEngine}
            changeSearchHandler={changeSearchHandler}
            {...routerProps}
          />
        )}/>
      </Switch>
    </main>
  )
}

export default HomePage;