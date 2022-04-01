import './SettingsPage.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function SettingsPage() {
  
  return (
    <div className='settings-page__wrapper page-wrapper scale-in-center'>
      <div className={`settings-page__container ${ false && `settings-page__container--dark`}`}>
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

        </div>
      </div>
    </div>
  )
}


export default SettingsPage;