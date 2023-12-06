import React, { FC } from 'react';
import styled from 'styled-components';

type AppDividerProps = {
  margin?: string;
};

const StyledDivider = styled.hr<AppDividerProps>`
  border: 1px solid ${(props) => props.theme.colors.divider};
  margin: ${({ margin }) => margin || '10px 0'};
`;

const AppDivider: FC<AppDividerProps> = (props) => {
  return <StyledDivider {...props} />;
};

export default AppDivider;
