import './LinksPage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LinkElement from '../../components/LinkElement/LinkElement';


function LinksPage() {
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

  return (
    <main className="links-page" style={{backgroundColor: `${"#323232"}`}}>
      <div className='links-page__wrapper page-wrapper'>
        <div className='links-page__container'>
        {linksList.map((element => {
            return (
              <LinkElement
                key={element.id}
                title={element.title}
                url={element.url}
                description={element.description}
                category={element.category}
                subcategory={element.subcategory}
                status={element.status}
              />
              )
          }))}
        </div>
      </div>
    </main>
  )
}

function getLinks() {
  axios
    .get(`${process.env.REACT_APP_API_URL}/links`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    })
}


export default LinksPage;