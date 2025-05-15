import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main id="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;