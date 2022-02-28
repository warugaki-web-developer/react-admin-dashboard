import React from 'react';
import SidebarLink from './SidebarLink';

import logo from '../assets/logo.svg';

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar__logo">
      <img src={logo} alt="logo" />
      <h1>React Admin Dashboard</h1>
    </div>
    <nav>
      <ul>
        <li>
          <SidebarLink to="/">Dashboard</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/customers">Customers</SidebarLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
