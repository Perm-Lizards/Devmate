import './Layout.scss';
import Header from '../header/Header';

import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
