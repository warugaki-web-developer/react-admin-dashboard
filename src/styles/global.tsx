import { css } from '@emotion/react';
import 'sanitize.css'; // reset css
import 'boxicons/css/boxicons.min.css';

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');

  body {
    margin: 0;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default globalStyle;
