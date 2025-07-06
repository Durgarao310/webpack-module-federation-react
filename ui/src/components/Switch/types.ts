import React from 'react';

export interface SwitchProps {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}
