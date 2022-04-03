import "./SettingsTab.scss";
import { NavLink } from "react-router-dom";




function SettingsTab ({title, to}) {
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