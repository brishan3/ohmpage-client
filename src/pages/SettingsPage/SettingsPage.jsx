import './SettingsPage.scss';
import { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import BackgroundSettings from '../../components/BackgroundSettings/BackgroundSettings';

function SettingsPage({theme, toggleTheme, setBackground}) {


  return (
    <div className='settings-page__wrapper page-wrapper'>
      <div className={`settings-page__container ${ theme === 'dark' && `settings-page__container--dark`}`}>
        <div className='settings__menu-bar'>
          <NavLink
            to="/settings/background"
            className={isActive =>
              'settings__menu-tab-link' + (isActive ? ' settings__menu-tab-link--selected' : '')
            }
          >
            <h3 className='settings__menu-tab-text'>Background</h3>
          </NavLink>
          <NavLink
            to="/settings/searchsettings"
            className={isActive =>
              'settings__menu-tab-link' + (isActive ? ' settings__menu-tab-link--selected' : '')
            }
          >
            <h3 className='settings__menu-tab-text'>Search Engine</h3>
          </NavLink>
          <NavLink
            to="/settings/theme"
            className={isActive =>
              'settings__menu-tab-link' + (isActive ? ' settings__menu-tab-link--selected' : '')
            }
          >
            <h3 className='settings__menu-tab-text'>Theme</h3>
          </NavLink>
        </div>
        <div className='settings__sub-menu'>
            <Route path='/settings/background' component={() => (
                <BackgroundSettings/>
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
                <IconButton sx={{ width: '7rem', borderRadius: '25px', ml: '0.6rem', mt: '1rem' }} onClick={() => {toggleTheme()}} color="inherit">
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