// src/components/FormComponents/Label/Label.styles.ts
import styled, { css } from 'styled-components';

export const StyledLabel = styled.label<{
  $isError?: boolean;
  $isDisabled?: boolean;
  $size?: 'small' | 'medium' | 'large';
}>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}; /* Example: theme.spacing.small from your M3 theme */

  /* --- REFINED TYPOGRAPHY APPLICATION --- */
  ${({ theme, $size }) => {
    // Determine which typography tokens to use based on the size prop
    // Default to 'small' if $size is not explicitly provided or is undefined
    const typographyTokens = theme.typography.label[$size || 'small'];

    return css`
      font-family: ${typographyTokens.fontFamily};
      font-size: ${typographyTokens.fontSize};
      font-weight: ${typographyTokens.fontWeight};
      line-height: ${typographyTokens.lineHeight};
      letter-spacing: ${typographyTokens.letterSpacing};
    `;
  }}
  /* --- END REFINED TYPOGRAPHY APPLICATION --- */


  color: ${({ theme }) => theme.colors.onSurfaceVariant}; /* Default M3 label color */

  /* Apply error state styles */
  ${({ $isError, theme }) =>
    $isError &&
    css`
      color: ${theme.colors.error};
    `}

  /* Apply disabled state styles */
  ${({ $isDisabled, theme }) =>
    $isDisabled &&
    css`
      color: ${theme.colors.onSurface.withOpacity(0.38)}; /* M3 disabled opacity */
      cursor: not-allowed;
    `}

  .label-icon {
    display: flex;
    align-items: center;
    /* You might want to size icons consistently here or via icon component props */
    color: inherit; /* Icons inherit label color */
  }
`;