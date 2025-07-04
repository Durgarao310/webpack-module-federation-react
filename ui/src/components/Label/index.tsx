// src/components/FormComponents/Label/Label.tsx
import React from 'react';
import { LabelProps } from './types';
import { StyledLabel } from './styles';

const Label: React.FC<LabelProps> = ({
  children,
  startingIcon,
  endIcon,
  htmlFor,
  isError = false,
  isDisabled = false,
  size = 'medium', // Default size to 'medium'
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      $isError={isError}
      $isDisabled={isDisabled}
      $size={size} // Pass the size prop
    >
      {startingIcon && <span className="label-icon">{startingIcon}</span>}
      {children}
      {endIcon && <span className="label-icon">{endIcon}</span>}
    </StyledLabel>
  );
};

export default Label;