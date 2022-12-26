import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './styles/root.css';
import './styles/reset.css';
import './styles/flexbox.css';
import './styles/typography.css';
import './styles/utilities.css';
import './styles/spacing.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
