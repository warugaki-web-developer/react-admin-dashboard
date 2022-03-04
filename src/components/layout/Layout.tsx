import React from 'react';
import { css } from '@emotion/react';

import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const layoutStyle = css`
  & {
    display: flex;
    width: 100%;
    min-height: 100vh;
    color: var(--txt-color);
  }

  .layout__side {
    width: 300px;
  }

  .layout__content {
    flex: 1;
    background-color: var(--second-bg);
  }

  .layout__content-main {
    flex: 1;
    padding: 30px;
  }
`;

const Layout = () => (
  <div className="layout" css={layoutStyle}>
    <div className="layout__side">
      <Sidebar />
    </div>
    <div className="layout__content">
      <main className="layout__content-main">
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
