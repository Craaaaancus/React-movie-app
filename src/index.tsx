import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import { App } from '@/components/App';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const GlobalStyles = createGlobalStyle`

`;

const theme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#FF8A00',
  },
};

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
