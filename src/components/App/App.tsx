import React, { useContext, useState } from 'react';
import Button from '@components/Button';
import { AppHeader } from '@components/AppHeader';
import { AppContainer } from '@components/AppContainer';
import { AppFooter } from '@components/AppFooter';
import { AppMain } from '@components/AppMain';
import { APP_THEME } from '@/constants';
import { ThemeContext, ThemeProvider, useTheme } from 'styled-components';
import theme from '@/themes';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(APP_THEME.DARK);
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === APP_THEME.DARK ? APP_THEME.LIGHT : APP_THEME.DARK);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <AppHeader toggleTheme={toggleTheme}></AppHeader>
      <AppMain></AppMain>
      <AppFooter></AppFooter>
    </ThemeProvider>
  );
};

export default App;
