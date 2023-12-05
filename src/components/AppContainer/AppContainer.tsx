import React, { FC, HTMLAttributes } from 'react';
import './style.css';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

type AppContainerProps = HTMLAttributes<HTMLDivElement>;

const AppContainer: FC<AppContainerProps> = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default AppContainer;
