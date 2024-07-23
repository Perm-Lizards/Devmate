import './Header.scss';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-name">Devmate</h1>
      <IconButton aria-label="log-in" className="log-in-img-button">
        <LoginIcon className="log-in-img" />
      </IconButton>
    </div>
  );
};

export default Header;
