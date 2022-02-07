import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import ColorTheme from './components/ColorTheme';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
    <ColorTheme />
  </React.StrictMode>,
  document.getElementById('root')
);
