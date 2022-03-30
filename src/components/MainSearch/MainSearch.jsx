import "./MainSearch.scss";
import IconBar from '../IconBar/IconBar';

function MainSearch() {
  return (
  <div className='main__wrapper page-wrapper'>
    <div className='main__container'>
      <div className='main__search-wrapper'>
        <form className='main__search-form' method="get" action="https://www.google.com/search" target='_blank'>
          <input className='main__search-input' type="text" name="q" placeholder='Search...'/>
        </form>
      </div>
      <div className='main__icon-container'>
        <IconBar/>
      </div>
    </div>
  </div>
  )
}

export default MainSearch;