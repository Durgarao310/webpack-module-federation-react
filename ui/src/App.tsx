import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  transition: all 0.25s linear;
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
`;


const App = () => {

  return (
    <StyledContainer>
        <div>
          <h1>UI Micro-frontend</h1>
          <p>Select Component with Theme Support</p>
        </div>

     
    </StyledContainer>
  );
};

export default App;
