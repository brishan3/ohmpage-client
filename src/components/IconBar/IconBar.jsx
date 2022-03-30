import './IconBar.scss';
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TheatersIcon from '@mui/icons-material/Theaters';
import CodeIcon from '@mui/icons-material/Code';
import { IconButton, Grow } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
// import Grow from '@mui/material/Grow';

function IconBar({linksList}) {
  // const shortList = linksList.slice(0,5);
  const iconColor = '#71c0f5';
  return (
    <div className="icon-bar">
      <div className="icon-container">
        <FadeMenu list={linksList} category="Entertainment">
          <TheatersIcon sx={{color: iconColor}}/>
        </FadeMenu>
      </div>
      <div className="icon-container">
        <FadeMenu list={linksList} category="Social">
          <EmojiPeopleIcon sx={{color: iconColor}}/>
        </FadeMenu>
      </div>
      <div className="icon-container" >
        <FadeMenu list={linksList} category="Web Tools">
          <HomeRepairServiceIcon sx={{color: iconColor}}/>
        </FadeMenu>
      </div>
      <div className="icon-container">
        <FadeMenu list={linksList} category="Software">
          <CodeIcon sx={{color: iconColor}}/>
        </FadeMenu>
      </div>
      <div className="icon-container">
        <FadeMenu list={linksList} category="Information">
          <InfoIcon sx={{color: iconColor}}/>
        </FadeMenu>
      </div>
    </div>
  )
}

function FadeMenu({children, list, category}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
        {/* <TheatersIcon sx={{color: 'white'}}/> */}
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
        {list.filter((element) => {
          return element.category === category
        })
        // .slice(0,10)
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