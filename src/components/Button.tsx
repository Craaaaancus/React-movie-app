import { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Button = () => {
  async function handleClick() {
    const key = 'AIzaSyChDO_SI_eK5wKMVurjLPfZi-j0fdMrgWQ';
    const url = `https://youtube.googleapis.com/youtube/v3/videoCategories?key=${key}&regionCode=BY`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <StyledButton onClick={handleClick}>Click me!</StyledButton>
    </div>
  );
};

export default Button;
