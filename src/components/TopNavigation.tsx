import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

import user_image from '../assets/github-original.svg';

const currUser = {
  display_name: 'Warugaki',
  image: user_image,
};

const notifications = [
  {
    icon: 'bx bx-error',
    content: 'Curabitur id eros quis nunc suscipit blandit',
  },
  {
    icon: 'bx bx-package',
    content: 'Duis malesuada justo eu sapien elementum, in semper diam posuere',
  },
  {
    icon: 'bx bx-cart',
    content: 'Donec at nisi sit amet tortor commodo porttitor pretium a erat',
  },
  {
    icon: 'bx bx-error',
    content: 'In gravida mauris et nisi',
  },
  {
    icon: 'bx bx-cart',
    content: 'Curabitur id eros quis nunc suscipit blandit',
  },
];

const userMenus = [
  {
    icon: 'bx bx-user',
    content: 'Profile',
  },
  {
    icon: 'bx bx-wallet-alt',
    content: 'My Wallet',
  },
  {
    icon: 'bx bx-cog',
    content: 'Settings',
  },
  {
    icon: 'bx bx-log-out-circle bx-rotate-180',
    content: 'Logout',
  },
];

const renderNotificationItem = (
  item: {
    icon: string | undefined;
    content: string | undefined;
  },
  index: React.Key,
) => (
  <div className="notification-item" key={index}>
    <i className={item.icon} />
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="top-navigation__right-user">
    <div className="top-navigation__right-user-image">
      <img src={user.image} alt="" />
    </div>
    <div className="top-navigation__right-user-name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon} />
      <span>{item.content}</span>
    </div>
  </Link>
);

const topNavigationStyle = css`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--topnav-height);
    padding: 30px;
  }

  .top-navigation__search {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    overflow: hidden;
    background-color: var(--main-bg);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }

  .top-navigation__search > input {
    width: 100%;
    height: 100%;
    padding: 10px 60px 10px 20px;
    font-size: 1rem;
    color: var(--txt-color);
    background-color: var(--main-bg);
    border-radius: var(--border-radius);
  }

  .top-navigation__search > i {
    position: absolute;
    right: 20px;
    font-size: 1.5rem;
  }

  .top-navigation__right {
    display: flex;
    align-items: center;
  }

  .top-navigation__right-item ~ .top-navigation__right-item {
    margin-left: 30px;
  }

  .notification-item {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .notification-item:hover {
    background-color: var(--second-bg);
  }

  .notification-item > i {
    margin-right: 20px;
    font-size: 1.5rem;
  }

  .top-navigation__right-user {
    display: flex;
    align-items: center;
  }

  .top-navigation__right-user-image {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    overflow: hidden;
    border-radius: 50%;
  }

  .top-navigation__right-user-image > img {
    width: 100%;
  }

  .top-navigation__right-user-name {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const TopNavigation = () => (
  <div className="top-navigation" css={topNavigationStyle}>
    <div className="top-navigation__search">
      <input type="text" placeholder="Search here..." />
      <i className="bx bx-search" />
    </div>
    <div className="top-navigation__right">
      <div className="top-navigation__right-item">
        <Dropdown
          customToggle={() => renderUserToggle(currUser)}
          contentData={userMenus}
          renderItems={(item, index) => renderUserMenu(item, index)}
        />
      </div>
      <div className="top-navigation__right-item">
        <Dropdown
          icon="bx bx-bell"
          badge="12"
          contentData={notifications}
          renderItems={(item, index) => renderNotificationItem(item, index)}
          renderFooter={() => <Link to="/">View All</Link>}
        />
      </div>
      <div className="top-navigation__right-item">{/* <Dropdown /> */}</div>
    </div>
  </div>
);

export default TopNavigation;
