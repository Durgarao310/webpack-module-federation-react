// src/components/FormComponents/Label/Label.tsx
import React from 'react';
import { LabelProps } from './types';
import { StyledLabel } from './styles';

const Label: React.FC<LabelProps> = ({
  children, // Changed from 'text' to 'children' for more flexibility
  startingIcon,
  endIcon,
  htmlFor,
  isError = false,
  isDisabled = false,
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      $isError={isError}
      $isDisabled={isDisabled}
    >
      {startingIcon && <span className="label-icon">{startingIcon}</span>}
      {children}
      {endIcon && <span className="label-icon">{endIcon}</span>}
    </StyledLabel>
  );
};

export default Label;