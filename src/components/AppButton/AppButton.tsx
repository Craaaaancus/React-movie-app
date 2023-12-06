import React, { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
  font-size: 1.2rem;
  padding: 5px 20px;
  margin: 0 auto;
  font-weight: 700;
  background: #ff8a00;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  outline: none;
`;

const AppButton: FC<AppButtonProps> = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default AppButton;
