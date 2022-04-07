import "./SettingsTab.scss";
import { NavLink } from "react-router-dom";

//
// Renders an individual SettingsTab nav link component used to
// change the url params to a specific sub-menus correlated route
//
function SettingsTab ({ title, to }) {
  return (
    <NavLink
      to={to}
      className={isActive =>
        'settings-tab' + (isActive ? ' settings-tab--selected' : '')
      }
    >
      <h3>{title}</h3>
    </NavLink>
  )
}

export default SettingsTab;