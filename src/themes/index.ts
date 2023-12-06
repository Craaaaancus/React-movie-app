import { APP_THEME } from '@/constants';

const darkTheme = {
  primary: '#252525',
  secondary: '#FF8A00',
  text: '#FFFFFF',
  loadingContainerStart: 'hsl(200, 20%, 70%)',
  loadingContainerEnd: 'hsl(200, 20%, 95%)',
  loadingContentStart: 'hsl(200, 20%, 40%)',
  loadingContentEnd: 'hsl(200, 20%, 75%)',
  search: '#2F2F2F',
  searchFocus: '#4B4BBF',
  searchText: '#FFFFFF',
  searchClear: '#C6BCBC',
  searchButton: '#777777',
  divider: 'rgba(0, 0, 0, 0.38)',
};

const lightTheme = {
  primary: '#FFFFFF',
  secondary: '#FF8A00',
  text: '#000000',
  loadingContainerStart: 'hsl(200, 20%, 70%)',
  loadingContainerEnd: 'hsl(200, 20%, 95%)',
  loadingContentStart: 'hsl(200, 20%, 40%)',
  loadingContentEnd: 'hsl(200, 20%, 75%)',
  search: '#FAFAFA',
  searchFocus: '#5252e6',
  searchText: '#000000',
  searchClear: '#333',
  searchButton: 'rgba(0, 0, 0, 0.06)',
  divider: 'rgba(0, 0, 0, 0.19)',
};

const defaultTheme = {
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
    desktop: '(max-width: 1440px) and (min-width: 768px)',
    desktopLarge: '(min-width: 1440px)',
  },
};

const theme = {
  [APP_THEME.DARK]: {
    colors: darkTheme,
    ...defaultTheme,
  },
  [APP_THEME.LIGHT]: {
    colors: lightTheme,
    ...defaultTheme,
  },
};

export default theme;
