import React from 'react';
import SidebarLink from './SidebarLink';

import logo from '../assets/logo.svg';

const Sidebar = () => {
  const items = [
    {
      label: 'Dashboard',
      url: '/',
      boxIcons: 'bx bxs-dashboard',
    },
    {
      label: 'Customers',
      url: '/customers',
      boxIcons: 'bx bxs-user-pin',
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="logo" />
        <h1>React Admin Dashboard</h1>
      </div>
      <nav>
        <ul>
          {items.map(({ label, url, boxIcons }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <SidebarLink to={url}>
                <i className={boxIcons} />
                {label}
              </SidebarLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
