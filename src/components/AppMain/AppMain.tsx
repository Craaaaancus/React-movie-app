import styled from 'styled-components';
import { AppContainer } from '@components/AppContainer';
import { AppDivider } from '@components/AppDivider';
import { AppTopicFilter } from '@components/AppTopicFilter';
import { AppButton } from '@components/AppButton';
import { AppFlex } from '@components/AppFlex';
import { AppGrid } from '@components/AppGrid';
import { AppSkeletonLoader } from '@components/AppSkeletonLoader';
import { AppVideoCard } from '@components/AppVideoCard';

const StyledMain = styled.main`
  margin-top: 60px;
  padding: 20px 0;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
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
          <AppVideoCard></AppVideoCard>
          <AppSkeletonLoader></AppSkeletonLoader>
          <AppSkeletonLoader></AppSkeletonLoader>
        </AppGrid>

        <AppFlex margin='20px 0 10px'>
          <AppButton>Show More</AppButton>
        </AppFlex>
      </AppContainer>
    </StyledMain>
  );
};

export default AppMain;
