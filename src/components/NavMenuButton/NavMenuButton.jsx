import "./NavMenuButton.scss";
import { useState } from "react";
import { ReactComponent as MenuIcon} from '../../assets/icons/menuIcon.svg';
import NavDropdownMenu from "../NavDropdownMenu/NavDropdownMenu";

//
// Renders the NavMenuButton displayed in the top right, in the HeaderNav 
// Responsible for rendering the NavDropdownMenu when clicked
//
function NavMenuButton({theme}) {

  const [open, setOpen] = useState(false);

  return (
    <li className='nav-menu'>
      <button className='nav-menu__button' onClick={ () => setOpen(!open) }>
        <MenuIcon/>
      </button>
      <NavDropdownMenu open={open} setOpen={setOpen} theme={theme}/>
    </li>
  )
}

export default NavMenuButton;