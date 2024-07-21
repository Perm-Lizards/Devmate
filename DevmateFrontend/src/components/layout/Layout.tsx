import './Layout.scss';

import { Outlet } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const Layout = () => {
  return (
    <div className="container">
      <Outlet />
      <div className="krug-top">
        <CircularProgress className="krug" />
      </div>
    </div>
  );
};

export default Layout;
