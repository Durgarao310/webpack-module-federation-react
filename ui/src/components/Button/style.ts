import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

interface StyledButtonProps extends ButtonProps {
  theme: any;
}

const getVariantStyles = ({ theme, variant = 'filled', color = 'primary' }: StyledButtonProps) => {
  const colorValue = theme.colors[color];
  
  switch (variant) {
    case 'outlined':
      return css`
        background-color: transparent;
        border: 1px solid ${colorValue};
        color: ${colorValue};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.onSurface.withOpacity(0.1)};
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        border: 1px solid transparent;
        color: ${colorValue};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.onSurface.withOpacity(0.1)};
        }
      `;
    default: // filled
      return css`
        background-color: ${colorValue};
        color: ${theme.colors.onPrimary};
        border: 1px solid ${colorValue};

        &:hover:not(:disabled) {
          opacity: 0.9;
        }
      `;
  }
};

const getSizeStyles = ({ size = 'medium', theme }: StyledButtonProps) => {
  const buttonHeight = theme.componentSizes.buttonHeight;
  
  switch (size) {
    case 'small':
      return css`
        font-size: ${theme.typography.label.small.fontSize};
        height: ${buttonHeight.small};
        padding: 0 ${theme.spacing.md};
      `;
    case 'large':
      return css`
        font-size: ${theme.typography.label.large.fontSize};
        height: ${buttonHeight.large};
        padding: 0 ${theme.spacing.xl};
      `;
    default: // medium
      return css`
        font-size: ${theme.typography.label.medium.fontSize};
        height: ${buttonHeight.medium};
        padding: 0 ${theme.spacing.lg};
      `;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.componentSizes.borderRadius};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-family: ${({ theme }) => theme.typography.button.fontFamily};
  transition: all ${({ theme }) => theme.transitions.duration} ${({ theme }) => theme.transitions.easing};
  cursor: pointer;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
  position: relative;
  text-decoration: none;
  outline: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  ${(props) => getVariantStyles(props as StyledButtonProps)}
  ${(props) => getSizeStyles(props as StyledButtonProps)}
`;

export const ButtonIcon = styled.span<{ position: 'start' | 'end' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  ${({ position }) => position === 'start' && css`
    margin-right: 0.5rem;
  `}
  
  ${({ position }) => position === 'end' && css`
    margin-left: 0.5rem;
  `}
`;

export const LoadingSpinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  width: 1em;
  height: 1em;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonContent = styled.span<{ isLoading?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transition: opacity 0.2s ease-in-out;
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
