import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

type AppGridProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    rows: string;
    columns: string;
    margin: string;
    gap: string;
  }>;

const StyledGrid = styled.div<AppGridProps>`
  display: grid;
  grid-template-rows: ${({ rows }) => rows || 'none'};
  grid-template-columns: ${({ columns }) => columns || 'none'};
  grid-gap: ${({ gap }) => gap || 'initial'};
  position: relative;
  margin: ${({ margin }) => margin || '0'};
`;

const AppGrid: FC<AppGridProps> = (props) => {
  return <StyledGrid {...props}>{props.children}</StyledGrid>;
};

export default AppGrid;
