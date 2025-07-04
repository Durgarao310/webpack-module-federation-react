import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonText = styled.span`
  font-size: 16px;
`;

const Index = () => {
  return (
    <Button>
      <ButtonText>Click Me</ButtonText>
    </Button>
  );
};

export default Index;
