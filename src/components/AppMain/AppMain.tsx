import React from 'react';
import { AppContainer } from '../AppContainer';
import Button from '../Button';
import styled from 'styled-components';
import { AppDivider } from '../AppDivider';
import { AppTopicFilter } from '../AppTopicFilter';
import { AppButton } from '../AppButton';
import { AppFlex } from '../AppFlex';
import { AppGrid } from '../AppGrid';
import { AppVideoCard } from '../AppVideoCard';
import { AppSkeletonLoader } from '../AppSkeletonLoader';

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
        <AppGrid columns='1fr 1fr 1fr' gap='20px' margin='20px 0'>
          <AppSkeletonLoader></AppSkeletonLoader>
          <AppVideoCard></AppVideoCard>
          <AppVideoCard></AppVideoCard>
          <AppVideoCard></AppVideoCard>
          <AppSkeletonLoader></AppSkeletonLoader>
          <AppVideoCard></AppVideoCard>
          <AppVideoCard></AppVideoCard>
          <AppVideoCard></AppVideoCard>
          <AppVideoCard></AppVideoCard>
          <AppVideoCard></AppVideoCard>
        </AppGrid>

        <AppFlex margin='20px 0 10px'>
          <AppButton>Show More</AppButton>
        </AppFlex>
      </AppContainer>
      <AppDivider />
    </StyledMain>
  );
};

export default AppMain;
