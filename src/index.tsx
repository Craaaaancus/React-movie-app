import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/components/App';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition-property: color, background-color;
    transition-duration: .5s;
    transition-timing-function: ease;
  }

  body {
    font-size: 14px;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-x: hidden;
  }
`;

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
