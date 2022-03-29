import './HomePage.scss';
import testBackground from '../../assets/images/testBackground.png';
import testBackground2 from '../../assets/images/testBackground2.png';
import { useState } from 'react';


function HomePage() {
  const [background, setBackground] = useState(testBackground);
  return (
    <main className="main" style={{backgroundImage: `url(${background})`}}>
      <div className='main__wrapper page-wrapper'>
        <div className='main__container'>
          <div className='main__search-wrapper'>
            <form className='main__search-form' method="get" action="https://www.google.com/search" target='_blank'>
              <input className='main__search-input' type="text" name="q" placeholder='Search...'/>
            </form>
            <div className='main__icon-container'>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


export default HomePage;