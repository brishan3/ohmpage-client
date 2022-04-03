import './SettingsPage.scss';
import { Route } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import BackgroundSettings from '../../components/BackgroundSettings/BackgroundSettings';
import SettingsTab from '../../components/SettingsTab/SettingsTab';



function SettingsPage({ theme, toggleTheme, backgroundList, changeBackgroundHandler }) {

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
              <>
                <h3>Search engine settings</h3>
              </>
              )}
            />
            <Route path='/settings/theme' component={() => (
              <>
                <h3>Theme settings</h3>
                <IconButton sx={{ width: '7rem', borderRadius: '25px', mt: '1rem' }} onClick={() => {toggleTheme()}} color="inherit">
                    {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </>
              )}
            />
        </div>
      </div>
    </div>
  )
}


export default SettingsPage;