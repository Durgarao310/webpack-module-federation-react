import styled, { css } from 'styled-components';

export const SwitchContainer = styled.label<{
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const SwitchInput = styled.input`
  display: none;
`;

export const SwitchSlider = styled.div<{
  isChecked: boolean;
  size?: 'small' | 'medium' | 'large';
}>`
  position: relative;
  width: ${({ size }) => (size === 'small' ? '32px' : size === 'large' ? '48px' : '40px')};
  height: ${({ size }) => (size === 'small' ? '16px' : size === 'large' ? '24px' : '20px')};
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : theme.colors.surface};
  border-radius: 12px;
  transition: background-color 0.2s;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '20px' : '16px')};
    height: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '20px' : '16px')};
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.2s;
    transform: ${({ isChecked, size }) =>
      isChecked
        ? `translateX(${size === 'small' ? '16px' : size === 'large' ? '24px' : '20px'})`
        : 'translateX(0)'};
  }
`;
