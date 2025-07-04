import styled, { css } from 'styled-components';
import { StyledCheckBoxProps, CheckBoxSize, CheckBoxVariant } from './types';

const getSizeStyles = (size: CheckBoxSize = 'medium', theme: any) => {
  // More appropriate checkbox sizes for better visual balance
  const sizeMap = {
    small: theme.spacing.sm,    // 8px -> too small, let's use 12px
    medium: theme.spacing.md,   // 16px 
    large: '20px',              // 20px
  };
  
  // More refined sizes for better proportion
  const refinedSizeMap = {
    small: '12px',              // Small but usable
    medium: theme.spacing.md,   // 16px - good default
    large: '20px',              // Large but not overwhelming
  };
  
  // Smaller border radius for checkboxes (proportional to size)
  const borderRadiusMap = {
    small: '2px',               // Very subtle rounding
    medium: theme.spacing.xs,   // 4px
    large: theme.spacing.xs,    // 4px
  };
  
  return css`
    width: ${refinedSizeMap[size]};
    height: ${refinedSizeMap[size]};
    border-radius: ${borderRadiusMap[size]};
  `;
};

const getVariantStyles = (variant: CheckBoxVariant = 'primary', theme: any) => {
  const variants = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    success: theme.colors.success,
    error: theme.colors.error,
  };
  
  return css`
    accent-color: ${variants[variant]};
    
    &:checked {
      background-color: ${variants[variant]};
      border-color: ${variants[variant]};
    }
    
    &:focus {
      outline: 2px solid ${variants[variant]}33;
      outline-offset: 2px;
    }
  `;
};

export const StyledCheckBoxContainer = styled.label<StyledCheckBoxProps>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  user-select: none;
  
  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 0.6 : 0.8)};
  }
  
  transition: opacity ${({ theme }) => theme.transitions.duration} ${({ theme }) => theme.transitions.easing};
`;

export const StyledCheckBox = styled.input<StyledCheckBoxProps>`
  appearance: none;
  margin: 0;
  border: 2px solid ${({ theme }) => theme.colors.onSurface.mediumEmphasis};
  background-color: transparent;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  position: relative;
  transition: all ${({ theme }) => theme.transitions.duration} ${({ theme }) => theme.transitions.easing};
  
  ${({ $size, theme }) => getSizeStyles($size, theme)}
  ${({ $variant, theme }) => getVariantStyles($variant, theme)}
  
  &:checked {
    background-color: ${({ $variant = 'primary', theme }) => {
      const variants = {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        success: theme.colors.success,
        error: theme.colors.error,
      };
      return variants[$variant];
    }};
    border-color: ${({ $variant = 'primary', theme }) => {
      const variants = {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        success: theme.colors.success,
        error: theme.colors.error,
      };
      return variants[$variant];
    }};
    
    &::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.colors.onPrimary};
      font-size: ${({ $size = 'medium', theme }) => {
        const fontSizes = {
          small: '8px',                             // Smaller for 12px checkbox
          medium: '10px',                           // Proportional for 16px checkbox
          large: '12px',                            // Proportional for 20px checkbox
        };
        return fontSizes[$size];
      }};
      font-weight: bold;
      line-height: 1;
    }
  }
  
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.onSurface.disabled};
    border-color: ${({ theme }) => theme.colors.onSurface.disabled};
    
    &:checked {
      background-color: ${({ theme }) => theme.colors.onSurface.disabled};
      border-color: ${({ theme }) => theme.colors.onSurface.disabled};
      
      &::after {
        color: ${({ theme }) => theme.colors.onSurface.mediumEmphasis};
      }
    }
  }
  
  &:hover:not(:disabled) {
    border-color: ${({ $variant = 'primary', theme }) => {
      const variants = {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        success: theme.colors.success,
        error: theme.colors.error,
      };
      return variants[$variant];
    }};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ $variant = 'primary', theme }) => {
      const variants = {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        success: theme.colors.success,
        error: theme.colors.error,
      };
      return variants[$variant];
    }}33;
  }
`;
