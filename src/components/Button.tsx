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
  const [count, setCount] = useState(0);
  return (
    <div>
      <StyledButton onClick={() => setCount(count + 1)}>{count}</StyledButton>
    </div>
  );
};

export default Button;
