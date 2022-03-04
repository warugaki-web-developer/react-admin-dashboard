import React from 'react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

type SidebarLinkProps = {
  label: string;
  url: string;
  boxIcons: string;
};

const SidebarLink = ({ label, url, boxIcons }: SidebarLinkProps) => {
  const resolved = useResolvedPath(url);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={boxIcons}
        style={{ textDecoration: match ? 'underline' : 'none' }}
        to={url}
      >
        {label}
      </Link>
      {match && ' (active)'}
    </div>
  );
};

export default SidebarLink;
