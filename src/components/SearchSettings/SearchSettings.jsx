import "./SearchSettings.scss";

function SearchSettings ({searchEngine, changeSearchHandler}) {
  return (
    <>
      <h3 className="settings__sub-menu-title">Search Engine Settings</h3>
      <div className="search-settings">
        <button 
          className={`search-settings__button ${searchEngine.name === 'Google' && 'search-settings__button--selected'}`}
          onClick={() => changeSearchHandler({name: "Google", url:"https://www.google.com/search"})}
        >
          Google
        </button>
        <button 
          className={`search-settings__button ${searchEngine.name === 'DuckDuckGo' && 'search-settings__button--selected'}`}
          onClick={() => changeSearchHandler({name: "DuckDuckGo", url:"https://duckduckgo.com/"})}
        >
          DuckDuckGo
        </button>
        <button 
          className={`search-settings__button ${searchEngine.name === 'Bing' && 'search-settings__button--selected'}`}
          onClick={() => changeSearchHandler({name: "Bing", url:"https://www.bing.com/search"})}
        >
          Bing
        </button>
      </div>
    </>
  )
}

export default SearchSettings;