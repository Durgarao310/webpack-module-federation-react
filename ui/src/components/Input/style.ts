import styled, { css } from 'styled-components';
import { InputProps } from './types';

interface StyledInputProps extends InputProps {
  theme: any;
}

const getVariantStyles = ({ theme, variant = 'outlined', hasError }: StyledInputProps) => {
  const borderColor = hasError ? theme.colors.error : theme.borderColor;
  const focusBorderColor = hasError ? theme.colors.error : theme.colors.primary;
  
  switch (variant) {
    case 'filled':
      return css`
        background-color: ${theme.colors.surface};
        border: none;
        border-bottom: 2px solid ${borderColor};
        border-radius: ${theme.componentSizes.borderRadius} ${theme.componentSizes.borderRadius} 0 0;
        
        &:focus {
          border-bottom-color: ${focusBorderColor};
          background-color: ${theme.colors.surfaceVariant || theme.colors.surface};
        }
      `;
    case 'standard':
      return css`
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${borderColor};
        border-radius: 0;
        
        &:focus {
          border-bottom: 2px solid ${focusBorderColor};
        }
      `;
    default: // outlined
      return css`
        background-color: ${theme.colors.background};
        border: 1px solid ${borderColor};
        border-radius: ${theme.componentSizes.borderRadius};
        
        &:focus {
          border-color: ${focusBorderColor};
          outline: none;
        }
        
        &:hover:not(:disabled) {
          border-color: ${theme.colors.onSurface.mediumEmphasis};
        }
      `;
  }
};

const getSizeStyles = ({ size = 'medium', theme }: StyledInputProps) => {
  const inputHeight = theme.componentSizes.inputHeight || {
    small: '32px',
    medium: '40px',
    large: '48px'
  };
  
  switch (size) {
    case 'small':
      return css`
        font-size: ${theme.typography.body2.fontSize};
        height: ${inputHeight.small};
        padding: 0 ${theme.spacing.sm};
      `;
    case 'large':
      return css`
        font-size: ${theme.typography.body1.fontSize};
        height: ${inputHeight.large};
        padding: 0 ${theme.spacing.lg};
      `;
    default: // medium
      return css`
        font-size: ${theme.typography.body1.fontSize};
        height: ${inputHeight.medium};
        padding: 0 ${theme.spacing.md};
      `;
  }
};

export const InputContainer = styled.div<{ isFullWidth?: boolean }>`
  display: ${({ isFullWidth }) => (isFullWidth ? 'block' : 'inline-block')};
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
  position: relative;
`;

export const InputLabel = styled.label<{ theme: any; isRequired?: boolean; hasError?: boolean }>`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.typography.label.medium.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.medium.fontWeight};
  color: ${({ theme, hasError }) => hasError ? theme.colors.error : theme.colors.onSurface.highEmphasis};
  
  ${({ isRequired }) => isRequired && css`
    &::after {
      content: ' *';
      color: ${({ theme }) => theme.colors.error};
    }
  `}
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.onSurface.highEmphasis};
  transition: all ${({ theme }) => theme.transitions?.duration || '0.2s'} ${({ theme }) => theme.transitions?.easing || 'ease'};
  box-sizing: border-box;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.onSurface.disabled};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.onSurface.withOpacity(0.05)};
  }
  
  &:focus {
    outline: none;
  }
  
  ${(props) => getVariantStyles(props as StyledInputProps)}
  ${(props) => getSizeStyles(props as StyledInputProps)}
`;

export const InputIcon = styled.span<{ position: 'start' | 'end'; theme: any }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.onSurface.mediumEmphasis};
  display: flex;
  align-items: center;
  pointer-events: none;
  
  ${({ position, theme }) => position === 'start' ? css`
    left: ${theme.spacing.sm};
  ` : css`
    right: ${theme.spacing.sm};
  `}
`;