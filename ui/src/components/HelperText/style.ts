import styled, { css } from 'styled-components';
import { HelperTextProps } from './types';

interface StyledHelperTextProps extends HelperTextProps {
  theme: any;
}

const getColorStyles = ({ theme, hasError, color }: StyledHelperTextProps) => {
  if (hasError) {
    return css`
      color: ${theme.colors.error};
    `;
  }
  
  if (color) {
    switch (color) {
      case 'primary':
        return css`
          color: ${theme.colors.primary};
        `;
      case 'secondary':
        return css`
          color: ${theme.colors.secondary};
        `;
      case 'error':
        return css`
          color: ${theme.colors.error};
        `;
      case 'warning':
        return css`
          color: ${theme.colors.warning};
        `;
      case 'success':
        return css`
          color: ${theme.colors.success};
        `;
      case 'info':
        return css`
          color: ${theme.colors.primary};
        `;
      default:
        return css`
          color: ${theme.colors.onSurface.mediumEmphasis};
        `;
    }
  }
  
  return css`
    color: ${theme.colors.onSurface.mediumEmphasis};
  `;
};

const getSizeStyles = ({ size = 'medium', theme }: StyledHelperTextProps) => {
  switch (size) {
    case 'small':
      return css`
        font-size: ${theme.typography.caption?.fontSize || '12px'};
        line-height: ${theme.typography.caption?.lineHeight || '16px'};
      `;
    case 'large':
      return css`
        font-size: ${theme.typography.body1.fontSize};
        line-height: ${theme.typography.body1.lineHeight};
      `;
    default: // medium
      return css`
        font-size: ${theme.typography.body2.fontSize};
        line-height: ${theme.typography.body2.lineHeight};
      `;
  }
};

export const StyledHelperText = styled.div<HelperTextProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 400;
  margin: 0;
  transition: color ${({ theme }) => theme.transitions?.duration || '0.2s'} ${({ theme }) => theme.transitions?.easing || 'ease'};
  
  ${({ isSubtle }) => isSubtle && css`
    opacity: 0.7;
  `}
  
  ${({ srOnly }) => srOnly && css`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `}
  
  ${(props) => getColorStyles(props as StyledHelperTextProps)}
  ${(props) => getSizeStyles(props as StyledHelperTextProps)}
`;

export const HelperTextContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const HelperTextIcon = styled.span<{ theme: any }>`
  display: inline-flex;
  align-items: center;
  margin-top: 1px; /* Slight adjustment to align with text */
  flex-shrink: 0;
  
  svg {
    width: 1em;
    height: 1em;
  }
`;
