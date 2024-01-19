import React from 'react';
import { styled } from 'styled-components';
import { AppModeSwitcher } from '@components/AppModeSwitcher';
import { AppFlex } from '@components/AppFlex';
import { AppLogo } from '@components/AppLogo';
import { AppSearchBar } from '@components/AppSearchBar';
import { AppContainer } from '@components/AppContainer';
import { AppDivider } from '@components/AppDivider';

const StyledHeader = styled.header`
  position: fixed;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
`;

const AppHeader = (props: { toggleTheme: () => void }) => {
  return (
    <StyledHeader>
      <AppContainer>
        <AppFlex justify='space-between' align='center' margin='10px 20px'>
          <AppLogo></AppLogo>
          <AppSearchBar></AppSearchBar>
          <AppModeSwitcher toggleTheme={props.toggleTheme}></AppModeSwitcher>
        </AppFlex>
      </AppContainer>
      <AppDivider margin='0' />
    </StyledHeader>
  );
};

export default AppHeader;
