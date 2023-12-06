import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

type AppChipProps = HTMLAttributes<HTMLDivElement> & {
  isActive?: boolean;
};

const StyledChip = styled.div<AppChipProps>`
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.8rem;
  padding: 0 15px;
  margin: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  user-select: none;
  cursor: pointer;
  background: ${(props) => props.theme.colors.searchButton};
  color: ${(props) => props.theme.colors.text};
`;

const AppChip = (props: AppChipProps) => {
  return <StyledChip>{props.children}</StyledChip>;
};

export default AppChip;
