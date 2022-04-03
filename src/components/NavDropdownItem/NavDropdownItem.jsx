import "./NavDropdownItem.scss";
import { Link } from "react-router-dom";

function NavDropdownItem({to, title, theme, setOpen, open}) {
  return (
    <Link className={`dropdown__menu-item ${theme === 'dark' ? " dropdown__menu-item--dark" : ""}`} to={to} onClick={ () => setOpen(!open) } >
      <p className='dropdown__menu-item-text'>{title}</p>
    </Link>
  )
}

export default NavDropdownItem;