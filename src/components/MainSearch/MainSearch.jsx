import "./MainSearch.scss";
import IconBar from '../IconBar/IconBar';

function MainSearch({links}) {
  return (
  <div className='main-search__wrapper page-wrapper scale-in-center'>
      <div className='main-search__inner-wrapper'>
        <form className='main-search__form' method="get" action="https://www.google.com/search" target='_blank'>
          <input className='main-search__input' type="text" name="q" placeholder='Search...'/>
        </form>
      </div>
      <div className='main-search__icon-container'>
        <IconBar links={links}/>
      </div>
  </div>
  )
}

export default MainSearch;