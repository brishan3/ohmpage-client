import "./NavDropdownMenu.scss";
import NavDropdownItem from "../NavDropdownItem/NavDropdownItem";

//
// Renders the dropdown menu component to be displayed when the NavMenuButton is clicked
//
function NavDropdownMenu({open, setOpen, theme}) {
  return (
      <div
        className={`dropdown ${open ? "dropdown--active" : ""}${theme === 'dark' ? " dropdown--dark" : ""}`}
      >
        <NavDropdownItem to="/linklibrary"
          title="Link Library"
          theme={theme}
          open={open}
          setOpen={setOpen}
        />
        <NavDropdownItem to="/settings/background"
          title="Settings"
          theme={theme}
          open={open}
          setOpen={setOpen}
        />
      </div> 
  )
}

export default NavDropdownMenu;