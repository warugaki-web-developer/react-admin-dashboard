import React from 'react';
import CustomLink from './CustomLink';

const Sidebar = () => (
  <nav>
    <ul>
      <li>
        <CustomLink to="/">Dashboard</CustomLink>
      </li>
      <li>
        <CustomLink to="/customers">Customers</CustomLink>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
