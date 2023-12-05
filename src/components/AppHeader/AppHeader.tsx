import React from 'react';
import { styled } from 'styled-components';
import { AppModeSwitcher } from '../AppModeSwitcher';
import { AppFlex } from '@components/AppFlex';
import { AppLogo } from '@components/AppLogo';
import { AppSearchBar } from '@components/AppSearchBar';
import { AppContainer } from '../AppContainer';
import { AppDivider } from '../AppDivider';

const StyledHeader = styled.header`
  position: fixed;
  background: #fff;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
`;

const AppHeader = () => {
  return (
    <StyledHeader>
      <AppContainer>
        <AppFlex justify='space-between' align='center' margin='10px 20px'>
          <AppLogo></AppLogo>
          <AppSearchBar></AppSearchBar>
          <AppModeSwitcher></AppModeSwitcher>
        </AppFlex>
      </AppContainer>
      <AppDivider />
    </StyledHeader>
  );
};

export default AppHeader;
