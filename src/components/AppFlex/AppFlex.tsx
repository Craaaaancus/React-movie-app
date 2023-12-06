import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div<AppFlexProps>`
  display: flex;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  position: relative;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'stretch'};
  flex-basis: ${({ basis }) => basis || 'auto'};
  margin: ${({ margin }) => margin || '0'};
`;

type AppFlexProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    align: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
    justify:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
      | 'stretch';
    basis: string;
    width: string;
    height: string;
    margin: string;
  }>;

const AppFlex = (props: AppFlexProps) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
};

export default AppFlex;
