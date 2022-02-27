import React from 'react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import type { LinkProps } from 'react-router-dom';

const CustomLink = ({ children, to }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ textDecoration: match ? 'underline' : 'none' }} to={to}>
        {children}
      </Link>
      {match && ' (active)'}
    </div>
  );
};

export default CustomLink;
