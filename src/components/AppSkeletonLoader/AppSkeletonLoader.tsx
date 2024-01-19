import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AppFlex } from '@components/AppFlex';

const skeletonLoading = keyframes`
  from {
    background-color: hsl(200, 20%, 50%);
  }

  to {
    background-color: hsl(200, 20%, 75%);
  }
`;

const contentLoading = keyframes`
  from {
    background-color: hsl(200, 20%, 20%);
  }

  to {
    background-color: hsl(200, 20%, 55%);
  }
`;

const StyledSkeletonLoader = styled.div`
  opacity: 0.7;
  animation: ${skeletonLoading} 1s linear infinite alternate;
  positon: relative;
  padding: 10px;
`;

const StyledSkeletonThumbnail = styled.div`
  opacity: 0.7;
  animation: ${contentLoading} 1s linear infinite alternate;
  width: 100%;
  height: 60%;
  margin-bottom: 10px;
`;

const StyledSkeletonAvatar = styled.div`
  opacity: 0.7;
  animation: ${contentLoading} 1s linear infinite alternate;
  min-height: 3.5rem;
  min-width: 3.5rem;
  border-radius: 50%;
  margin-right: 15px;
`;

const StyledSkeletonText = styled.div`
  opacity: 0.7;
  animation: ${contentLoading} 1s linear infinite alternate;
  width: 100%;
  height: 0.9rem;
  margin-bottom: 0.5rem;
  border-radius: 0.125rem;

  &:last-child {
    margin-bottom: 0;
    width: 80%;
  }
`;

const AppSkeletonLoader = () => {
  return (
    <StyledSkeletonLoader>
      <StyledSkeletonThumbnail></StyledSkeletonThumbnail>
      <AppFlex>
        <StyledSkeletonAvatar></StyledSkeletonAvatar>
        <AppFlex width='100%' direction='column'>
          <StyledSkeletonText></StyledSkeletonText>
          <StyledSkeletonText></StyledSkeletonText>
        </AppFlex>
      </AppFlex>
    </StyledSkeletonLoader>
  );
};

export default AppSkeletonLoader;
