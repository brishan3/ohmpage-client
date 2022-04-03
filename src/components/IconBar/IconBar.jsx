import './IconBar.scss';
import IconWithDropdown from '../IconWithDropdown/IconWithDropdown';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import TheatersIcon from '@mui/icons-material/Theaters';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';



function IconBar({ links }) {
  const iconColor = '#71c0f5';
  return (
    <div className="icon-bar">
      <div className="icon-container">
        <IconWithDropdown list={links.entertainment} category="Entertainment">
          <TheatersIcon sx={{color: iconColor, ml: '1px'}}/>
        </IconWithDropdown>
      </div>
      <div className="icon-container">
        <IconWithDropdown list={links.social} category="Social">
          <EmojiPeopleIcon sx={{color: iconColor, ml: '1px'}}/>
        </IconWithDropdown>
      </div>
      <div className="icon-container" >
        <IconWithDropdown list={links.webTools} category="Web Tools">
          <HomeRepairServiceIcon sx={{color: iconColor, ml: '1px'}}/>
        </IconWithDropdown>
      </div>
      <div className="icon-container">
        <IconWithDropdown list={links.software} category="Software">
          <CodeIcon sx={{color: iconColor, ml: '1px'}}/>
        </IconWithDropdown>
      </div>
      <div className="icon-container">
        <IconWithDropdown list={links.information} category="Information">
          <InfoIcon sx={{color: iconColor, ml: '1px'}}/>
        </IconWithDropdown>
      </div>
    </div>
  )
}


export default IconBar;