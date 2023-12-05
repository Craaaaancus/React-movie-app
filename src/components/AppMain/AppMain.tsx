import React from 'react';
import { AppContainer } from '../AppContainer';
import Button from '../Button';
import styled from 'styled-components';
import { AppDivider } from '../AppDivider';

const StyledMain = styled.main`
  margin-top: 60px;
  padding: 20px 0;
`;

const AppMain = () => {
  return (
    <StyledMain>
      <AppContainer>
        <Button></Button>
      </AppContainer>
      <AppDivider />
    </StyledMain>
  );
};

export default AppMain;
