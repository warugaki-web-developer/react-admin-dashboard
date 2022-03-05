import React from 'react';
import { css } from '@emotion/react';
import SidebarLink from './SidebarLink';

import logo from '../assets/logo.svg';

const sidebarStyle = css`
  & {
    display: flex;
    flex-direction: column;
  }

  .sidebar__logo {
    display: flex;
    align-items: center;
    padding: 2rem;
  }

  .sidebar__logo img {
    width: 2rem;
    margin-right: 0.5rem;
  }

  .sidebar__logo h1 {
    font-size: 1rem;
    line-height: 1;
  }

  .sidebar__nav {
    padding: 2rem;
  }

  .sidebar__nav-list > li + li {
    margin-top: 1rem;
  }
`;

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
    <div className="sidebar" css={sidebarStyle}>
      <div className="sidebar__logo">
        <img src={logo} alt="logo" />
        <h1>React Admin Dashboard</h1>
      </div>
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">
          {items.map(({ label, url, boxIcons }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <SidebarLink boxIcons={boxIcons} label={label} url={url} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
