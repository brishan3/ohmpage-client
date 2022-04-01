import React, { useState } from "react";
import './HeaderNav.scss';
import { ReactComponent as MenuIcon} from '../../assets/icons/menuIcon.svg';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className='header-nav'>
        <Link to="/">
          <h1 className='header-nav__logo'>
            <span className='header-nav__logo-prefix'>ohm</span>page
          </h1>
        </Link>
        <nav className='header-nav__nav'>
          <ul className='header-nav__nav-list'>
            <NavMenu/>
          </ul>
        </nav>
    </header>
  )
}

function NavMenu() {

  const [open, setOpen] = useState(false);

  return (
    <li className='nav-menu'>
      <button className='nav-menu__button' onClick={ () => setOpen(!open) }>
        <MenuIcon/>
      </button>
      <DropdownMenu open={open} setOpen={setOpen}/>
    </li>
  )
}

function DropdownMenu({open, setOpen}) {
  function DropdownItem({to, title}) {
    return (
      <Link className='dropdown__menu-item' to={to} onClick={ () => setOpen(!open) } >
        <p className='dropdown__menu-item-text'>{title}</p>
      </Link>
    )
  }
  return (
    <div className={`dropdown ${open ? "dropdown--active" : ""}`}>
      <DropdownItem to="/linklibrary" title="Link Library"/>
      <DropdownItem to="/settings/background" title="Settings"/>
    </div>
  )
}

export default Nav;