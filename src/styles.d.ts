import 'styled-components';
import theme from '@/themes';
import { APP_THEME } from './constants';

type CustomTheme = (typeof theme)[keyof typeof APP_THEME];

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
