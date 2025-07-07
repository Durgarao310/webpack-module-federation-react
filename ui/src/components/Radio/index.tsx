import React from 'react';
import { RadioProps } from './types';
import { RadioContainer, RadioInput, RadioCircle } from './style';

const Radio: React.FC<RadioProps> = ({
  label,
  value,
  name,
  checked,
  onChange,
  disabled = false,
  size = 'medium',
}) => {
  const handleChange = () => {
    if (disabled) return;
    onChange(value);
  };

  return (
    <RadioContainer disabled={disabled} size={size} onClick={handleChange}>
      <RadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <RadioCircle checked={checked} size={size} />
      <span>{label}</span>
    </RadioContainer>
  );
};

export default Radio;
