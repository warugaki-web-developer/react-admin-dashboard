import { css } from '@emotion/react';

type HelloWorldProps = {
  text: string;
};

const style = css`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    color: #696969;
  }

  .title {
    margin: 0;
  }

  .read {
    font-size: 24px;
    color: #aaa;
  }
`;
const HelloWorld = ({ text }: HelloWorldProps) => (
  <div css={style}>
    <h1 className="title">Vite + React + TypeScript + Storybook</h1>
    <p className="read">hello {text}!!</p>
  </div>
);

export default HelloWorld;
