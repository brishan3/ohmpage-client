import './IconBar.scss';
import { useState } from 'react';
import { styled } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { tooltipClasses } from '@mui/material';
import { IconButton, Grow, Tooltip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import TheatersIcon from '@mui/icons-material/Theaters';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';




const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        boxShadow: theme.shadows[1],
        fontSize: 16
      },
    }
  )
);

function IconBar({ links }) {
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

function FadeMenu({ children, list }) {
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
        sx={{marginTop:'1.25rem'}}
        PaperProps={{
          style: {
            maxHeight: "30vh",
            width: '20ch',
          },
        }}
      >
        {list
        .slice(0,50)
        .map((element) => {
          return (
            <LightTooltip
              key={element.url}
              title={element.description}
              placement='bottom-start'
              enterTouchDelay={300}
              disableInteractive={true}
              sx={{fontSize: '1rem', fontFamily: 'Nunito'}}
            >
              <a href={element.url} target="_blank" rel="noreferrer">
                <MenuItem
                  onClick={handleClose}
                  sx={{fontFamily: 'Nunito'}}
                >
                  {element.title}
                </MenuItem>
              </a>
            </LightTooltip>
          )
        })}
      </Menu>
    </div>
  );
}


export default IconBar;