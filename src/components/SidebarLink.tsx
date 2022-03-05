import React from 'react';
import { css } from '@emotion/react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

type SidebarLinkProps = {
  label: string;
  url: string;
  boxIcons: string;
};

const sidebarLinkStyle = css`
  & {
    display: flex;
    align-items: center;
    padding: 15px 25px;
    transition: color 0.3s ease 0s;
  }

  i {
    margin-right: 0.5rem;
  }

  &:hover {
    color: var(--main-color);
  }

  &.active {
    color: var(--txt-white);
    background-image: linear-gradient(
      to right,
      var(--main-color),
      var(--second-color)
    );
    border-radius: var(--border-radius);
  }
`;

const SidebarLink = ({ label, url, boxIcons }: SidebarLinkProps) => {
  const resolved = useResolvedPath(url);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div
      className={['sidebarlink', match ? 'active' : ''].join(' ').trim()}
      css={sidebarLinkStyle}
    >
      <i className={boxIcons} />
      <Link to={url}>{label}</Link>
    </div>
  );
};

export default SidebarLink;
