import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.19);
  margin: 10px 0;
`;

const AppDivider = () => {
  return <StyledDivider />;
};

export default AppDivider;
