import styled, { css } from 'styled-components';
import { SelectProps } from './types';

interface StyledSelectProps extends Omit<SelectProps, 'options' | 'onChange' | 'onFocus' | 'onBlur'> {
  theme: any;
}

const getColorStyles = ({ theme, color = 'primary', error }: StyledSelectProps) => {
  if (error) {
    return css`
      border-color: ${theme.colors.error};
      color: ${theme.colors.error};
      
      &:focus {
        border-color: ${theme.colors.error};
        box-shadow: 0 0 0 2px ${theme.colors.onSurface.withOpacity(0.1)};
      }
    `;
  }
  
  const colorValue = theme.colors[color];
  
  return css`
    border-color: ${theme.borderColor};
    color: ${theme.colors.onSurface.highEmphasis};
    
    &:focus {
      border-color: ${colorValue};
      box-shadow: 0 0 0 2px ${theme.colors.onSurface.withOpacity(0.1)};
      outline: none;
    }
    
    &:hover:not(:disabled) {
      border-color: ${theme.colors.onSurface.mediumEmphasis};
    }
  `;
};

const getSizeStyles = ({ size = 'medium', theme }: StyledSelectProps) => {
  const inputHeight = theme.componentSizes.inputHeight;
  
  switch (size) {
    case 'small':
      return css`
        height: ${inputHeight.small};
        font-size: ${theme.typography.body2.fontSize};
        padding: 0 ${theme.spacing.sm} 0 ${theme.spacing.md};
      `;
    case 'large':
      return css`
        height: ${inputHeight.large};
        font-size: ${theme.typography.body1.fontSize};
        padding: 0 ${theme.spacing.md} 0 ${theme.spacing.lg};
      `;
    default: // medium
      return css`
        height: ${inputHeight.medium};
        font-size: ${theme.typography.body1.fontSize};
        padding: 0 ${theme.spacing.sm} 0 ${theme.spacing.md};
      `;
  }
};

export const SelectContainer = styled.div<{ fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  position: relative;
`;

export const SelectLabel = styled.label<{ theme: any; required?: boolean; error?: boolean }>`
  font-family: ${({ theme }) => theme.typography.label.medium.fontFamily};
  font-size: ${({ theme }) => theme.typography.label.medium.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.medium.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.medium.lineHeight};
  color: ${({ theme, error }) => error ? theme.colors.error : theme.colors.onSurface.mediumEmphasis};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  
  ${({ required }) => required && css`
    &::after {
      content: ' *';
      color: ${({ theme }) => theme.colors.error};
    }
  `}
`;

export const SelectWrapper = styled.div<{ hasStartIcon?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  
  ${({ hasStartIcon, theme }) => hasStartIcon && css`
    padding-left: ${theme.spacing.lg};
  `}
`;

export const StyledSelect = styled.select<StyledSelectProps>`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid;
  border-radius: ${({ theme }) => theme.componentSizes.borderRadius};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  transition: all ${({ theme }) => theme.transitions.duration} ${({ theme }) => theme.transitions.easing};
  cursor: pointer;
  width: 100%;
  
  ${getSizeStyles}
  ${getColorStyles}
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.onSurface.withOpacity(0.05)};
    color: ${({ theme }) => theme.colors.onSurface.disabled};
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.onSurface.withOpacity(0.2)};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.onSurface.disabled};
  }
  
  /* Remove default dropdown arrow in IE/Edge */
  &::-ms-expand {
    display: none;
  }
`;

export const StartIcon = styled.div<{ theme: any; size?: "small" | "medium" | "large" }>`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.onSurface.mediumEmphasis};
  z-index: 1;
  pointer-events: none;
  
  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 16px;
        `;
      case 'large':
        return css`
          font-size: 20px;
        `;
      default:
        return css`
          font-size: 18px;
        `;
    }
  }}
`;

export const DropdownIcon = styled.div<{ theme: any; size?: "small" | "medium" | "large"; disabled?: boolean }>`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, disabled }) => disabled 
    ? theme.colors.onSurface.disabled 
    : theme.colors.onSurface.mediumEmphasis
  };
  pointer-events: none;
  transition: transform ${({ theme }) => theme.transitions.duration} ${({ theme }) => theme.transitions.easing};
  
  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 16px;
        `;
      case 'large':
        return css`
          font-size: 20px;
        `;
      default:
        return css`
          font-size: 18px;
        `;
    }
  }}
  
  ${StyledSelect}:focus + & {
    transform: translateY(-50%) rotate(180deg);
  }
`;

export const HelperText = styled.div<{ theme: any; error?: boolean }>`
  font-family: ${({ theme }) => theme.typography.caption.fontFamily};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
  color: ${({ theme, error }) => error ? theme.colors.error : theme.colors.onSurface.mediumEmphasis};
  margin-top: ${({ theme }) => theme.spacing.xs};
  min-height: ${({ theme }) => theme.typography.caption.lineHeight};
`;

export const SelectOption = styled.option<{ theme: any }>`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface.highEmphasis};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  
  &:disabled {
    color: ${({ theme }) => theme.colors.onSurface.disabled};
  }
  
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.onSurface.withOpacity(0.1)};
  }
`;
