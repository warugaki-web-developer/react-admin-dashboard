import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/customers">Customers</Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
