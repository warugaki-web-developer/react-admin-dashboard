import { css } from '@emotion/react';
import 'sanitize.css'; // reset css
import 'boxicons/css/boxicons.min.css';

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

  :root {
    --main-bg: #fff;
    --second-bg: #fafafb;
    --txt-color: #455560;
    --txt-white: #fff;
    --main-color: #349eff;
    --second-color: #62b4ff;
    --box-shadow: rgb(149 157 165 / 20%) 0 8px 24px;
    --main-bg-light: #fff;
    --second-bg-light: #fafafb;
    --txt-color-light: #455560;
    --box-shadow-light: rgb(149 157 165 / 20%) 0 8px 24px;
    --main-bg-dark: #2d2d2d;
    --second-bg-dark: #202020;
    --txt-color-dark: #bbb;
    --box-shadow-dark: rgb(0 0 0 / 20%) 0 5px 10px;
    --main-color-blue: #349eff;
    --second-color-blue: #62b4ff;
    --main-color-red: #fb0b12;
    --second-color-red: #ff4a6b;
    --main-color-cyan: #10d4d2;
    --second-color-cyan: #2ae9e6;
    --main-color-green: #019707;
    --second-color-green: #4caf50;
    --main-color-orange: #d68102;
    --second-color-orange: #fca11a;
    --sidebar-width: 300px;
    --border-radius: 15px;
    --topnav-height: 110px;
    --transition-cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  body {
    margin: 0;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 14px;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
    vertical-align: bottom;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default globalStyle;
