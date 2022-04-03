import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

function ThemeSettings ({theme, toggleTheme}) {
  return (
    <>
      <h3 className="settings__sub-menu-title">Theme Settings</h3>
      <IconButton sx={{ width: '7rem', borderRadius: '25px', mt: '1rem' }} onClick={() => {toggleTheme()}} color="inherit">
          {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </>
  )
}

export default ThemeSettings;