import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import globalStyle from './styles/global';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
