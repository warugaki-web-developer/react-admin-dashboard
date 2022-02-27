import React from 'react';
import ReactDOM from 'react-dom';

import { Global } from '@emotion/react';
import globalStyle from './styles/global';
import Layout from './components/layout/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <Layout />
  </React.StrictMode>,
  document.getElementById('root'),
);
