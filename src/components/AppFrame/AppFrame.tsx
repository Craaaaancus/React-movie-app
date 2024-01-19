import React, { FC } from 'react';
import styled from 'styled-components';

const StyledFrameContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`;

const StyledFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

type FrameProps = {
  src: string;
};

const AppFrame: FC<FrameProps> = (props) => {
  return (
    <StyledFrameContainer>
      <StyledFrame src={props.src}></StyledFrame>
    </StyledFrameContainer>
  );
};

export default AppFrame;
