import React from 'react';

import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar';

const Layout = () => (
  <div>
    <Sidebar />
    <Outlet />
  </div>
);

export default Layout;
