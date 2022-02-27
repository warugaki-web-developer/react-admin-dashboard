import React from 'react';
import SidebarLink from './SidebarLink';

const Sidebar = () => (
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
);

export default Sidebar;
