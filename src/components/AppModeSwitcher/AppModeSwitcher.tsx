import { APP_THEME } from '@/constants';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const StyledSwitcherSlider = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  background-color: transparent;
  border: 2px solid orange;
  border-radius: 32px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    left: -1px;
    width: 21px;
    height: 21px;
    border: 2px solid orange;
    border-radius: 35px;
    top: 50%;
    background: white;
    transform: translate(0, -50%);
  }
`;

const StyledSwitcherLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledSwitcherInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${StyledSwitcherSlider} {
    &:before {
      transform: translate(100%, -50%);
    }
  }
`;

const AppModeSwitcher = (props: { toggleTheme: () => void }) => {
  return (
    <StyledSwitcherLabel>
      <StyledSwitcherInput type='checkbox' onChange={props.toggleTheme}></StyledSwitcherInput>
      <StyledSwitcherSlider></StyledSwitcherSlider>
    </StyledSwitcherLabel>
  );
};

export default AppModeSwitcher;
