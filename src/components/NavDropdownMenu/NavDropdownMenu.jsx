import "./NavDropdownMenu.scss";
import NavDropdownItem from "../NavDropdownItem/NavDropdownItem";


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