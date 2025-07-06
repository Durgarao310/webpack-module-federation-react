import React from 'react';
import { SwitchProps } from './types';
import { SwitchContainer, SwitchInput, SwitchSlider } from './style';

const Switch: React.FC<SwitchProps> = ({
  isChecked,
  onChange,
  disabled = false,
  size = 'medium',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(event.target.checked);
  };

  return (
    <SwitchContainer disabled={disabled} size={size}>
      <SwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      <SwitchSlider isChecked={isChecked} size={size} />
    </SwitchContainer>
  );
};

export default Switch;
