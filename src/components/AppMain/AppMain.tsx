import React from 'react';
import { AppContainer } from '../AppContainer';
import Button from '../Button';
import styled from 'styled-components';
import { AppDivider } from '../AppDivider';
import { AppTopicFilter } from '../AppTopicFilter';
import { AppButton } from '../AppButton';
import { AppFlex } from '../AppFlex';

const StyledMain = styled.main`
  margin-top: 60px;
  padding: 20px 0;
`;

const AppMain = () => {
  return (
    <StyledMain>
      <AppContainer>
        <AppTopicFilter />
      </AppContainer>
      <AppDivider />
      <AppContainer>
        <div>
          orem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est incidunt accusamus
          veniam sed! Cum repudiandae delectus cumque aut voluptas amet quod, saepe qui nisi enim!
          Rem fugiat dignissimos eum.
        </div>

        <AppFlex margin='20px 0 10px'>
          <AppButton>Show More</AppButton>
        </AppFlex>
      </AppContainer>
      <AppDivider />
    </StyledMain>
  );
};

export default AppMain;
