import { APP_THEME } from '@/constants';
import { useState } from 'react';
import { useTheme } from 'styled-components';

export function useAppTheme() {
  const [currentTheme, setCurrentTheme] = useState(APP_THEME.LIGHT);
  const theme = useTheme();

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === APP_THEME.DARK ? APP_THEME.LIGHT : APP_THEME.DARK);
  };

  return [theme, toggleTheme];
}
