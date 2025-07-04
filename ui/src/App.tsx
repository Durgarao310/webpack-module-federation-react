import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  transition: all 0.25s linear;
`;

const App = () => {
  return (
    <StyledContainer>
      <h1>UI Micro-frontend</h1>
      <p>This component is from the 'ui' application.</p>
    </StyledContainer>
  );
};

export default App;
