import './IconBar.scss';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TheatersIcon from '@mui/icons-material/Theaters';
import CodeIcon from '@mui/icons-material/Code';
import { IconButton, Grow } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

function IconBar({links}) {
  // const shortList = linksList.slice(0,5);
  const iconColor = '#71c0f5';
  return (
    <div className="icon-bar">
      <div className="icon-container">
        <FadeMenu list={links.entertainment} category="Entertainment">
          <TheatersIcon sx={{color: iconColor}}/>
        </FadeMenu>
      </div>
      <div className="icon-container">
        <FadeMenu list={links.social} category="Social">
          <EmojiPeopleIcon sx={{color: iconColor}}/>
        </FadeMenu>
      </div>
      <div className="icon-container" >
        <FadeMenu list={links.webTools} category="Web Tools">
          <HomeRepairServiceIcon sx={{color: iconColor}}/>
        </FadeMenu>
      </div>
      <div className="icon-container">
        <FadeMenu list={links.software} category="Software">
          <CodeIcon sx={{color: iconColor}}/>
        </FadeMenu>
      </div>
      <div className="icon-container">
        <FadeMenu list={links.information} category="Information">
          <InfoIcon sx={{color: iconColor}}/>
        </FadeMenu>
      </div>
    </div>
  )
}

function FadeMenu({children, list}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

      >
        {children}
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Grow}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{marginTop:'1rem'}}
        PaperProps={{
          style: {
            maxHeight: 300,
            width: '20ch',
          },
        }}
      >
        {list
        .slice(0,50)
        .map((element) => {
          return (
            <MenuItem key={element.url} onClick={handleClose}><a href={element.url} target="_blank">{element.title}</a></MenuItem>
          )
        })}
      </Menu>
    </div>
  );
}


export default IconBar;