import React from "react";
import './HeaderNav.scss';
import { Link } from "react-router-dom";
import NavMenuButton from "../NavMenuButton/NavMenuButton";

function Nav({theme}) {
  return (
    <header className='header-nav'>
        <Link to="/">
          <h1 className={`header-nav__logo ${theme === 'dark' && 'header-nav__logo--dark'}`}>
            <span className='header-nav__logo-prefix'>
              ohm
            </span>
            <span className={`${theme === 'dark' && 'header-nav__logo-suffix--dark'}`}>
              page
            </span>
          </h1>
        </Link>
        <nav className='header-nav__nav'>
          <ul className='header-nav__nav-list'>
            <NavMenuButton
              theme={theme}
              />
          </ul>
        </nav>
    </header>
  )
}

export default Nav;