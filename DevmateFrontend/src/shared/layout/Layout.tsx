import './Layout.scss';
import Header from '../header/Header';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
      <div className="footer-container">3</div>
    </div>
  );
};

export default Layout;
