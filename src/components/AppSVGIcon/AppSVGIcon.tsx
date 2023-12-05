import React, { FC } from 'react';
import styled from 'styled-components';

type StyledSVGIconProps = {
  width: string;
  height: string;
  color: string;
};

type StyledSVGContainerProps = {
  margin: string;
  padding: string;
};

type AppSVGIconProps = Partial<StyledSVGIconProps> &
  Partial<StyledSVGContainerProps> & {
    icon: string;
  };

const StyledSVGContainer = styled.div<Partial<StyledSVGContainerProps>>`
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
`;

const AppSVGIcon: FC<AppSVGIconProps> = (props) => {
  const StyledSVGIcon = styled(props.icon)<Partial<StyledSVGIconProps>>`
    width: ${({ width }) => width || '16px'};
    height: ${({ height }) => height || '16px'};
    color: ${({ color }) => color || 'initial'};
  `;

  return (
    <StyledSVGContainer margin={props.margin} padding={props.padding}>
      <StyledSVGIcon {...props}></StyledSVGIcon>
    </StyledSVGContainer>
  );
};

export default AppSVGIcon;
