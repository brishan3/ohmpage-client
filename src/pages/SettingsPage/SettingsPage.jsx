import './SettingsPage.scss';
import { Route } from 'react-router-dom';
import BackgroundSettings from '../../components/BackgroundSettings/BackgroundSettings';
import SettingsTab from '../../components/SettingsTab/SettingsTab';
import ThemeSettings from '../../components/ThemeSettings/ThemeSettings';
import SearchSettings from '../../components/SearchSettings/SearchSettings';


//
// Renders the SettingsPage component and acts as a provider of props
// and medium for handler functions used within the settings page sub-menus
//
function SettingsPage({ 
                        theme,
                        toggleTheme,
                        backgroundList,
                        changeBackgroundHandler,
                        changeSearchHandler,
                        searchEngine
                      }) {

  return (
    <div className='settings-page__wrapper page-wrapper'>
      <div className={`settings-page__container ${ theme === 'dark' && `settings-page__container--dark`}`}>
        <div className='settings__menu-bar'>
          <SettingsTab
            title="Background"
            to='background'
          />
          <SettingsTab
            title="Search Engine"
            to='searchsettings'
          />
          <SettingsTab
            title="Theme"
            to='theme'
          />
        </div>
        <div className='settings__sub-menu'>
            <Route path='/settings/background' component={() => (
                <BackgroundSettings
                  backgroundList={backgroundList}
                  changeBackgroundHandler={changeBackgroundHandler}
                />
              )}
            />
            <Route path='/settings/searchsettings' component={() => (
                <SearchSettings
                  searchEngine={searchEngine}
                  changeSearchHandler={changeSearchHandler}
                />
              )}
            />
            <Route path='/settings/theme' component={() => (
              <ThemeSettings
                theme={theme}
                toggleTheme={toggleTheme}
              />
              )}
            />
        </div>
      </div>
    </div>
  )
}


export default SettingsPage;