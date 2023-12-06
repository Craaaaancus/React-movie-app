import React, { FC } from 'react';
import { AppFlex } from '../AppFlex';
import styled from 'styled-components';

type AppVideoCardProps = {
  width?: string;
};

const StyledVideoCard = styled.div`
  max-width: 330px;
  height: 280px;
  cursor: pointer;
`;

const StyledCardImage = styled.div`
  background:
    url(https://i.ytimg.com/vi/gCNeDWCI0vo/hqdefault_live.jpg),
    lightgray 50% / cover no-repeat;
  max-width: 100%;
  flex: 1;
`;

const StyledCardDescription = styled.div``;

const AppVideoCard: FC<AppVideoCardProps> = (props) => {
  return (
    <StyledVideoCard>
      <AppFlex direction='column' width='100%' height='100%'>
        <StyledCardImage></StyledCardImage>
        <StyledCardDescription></StyledCardDescription>
      </AppFlex>
    </StyledVideoCard>
  );
};

export default AppVideoCard;
