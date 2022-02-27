import { Global } from '@emotion/react';
import HelloWorld from './components/HelloWorld';

import globalStyle from './styles/global';

const App = () => (
  <>
    <Global styles={globalStyle} />
    <div className="App">
      <HelloWorld text="world" />
    </div>
  </>
);

export default App;
