// src/components/FormComponents/Label/Label.styles.ts
import styled, { css } from 'styled-components';

export const StyledLabel = styled.label<{
  $isError?: boolean;
  $isDisabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small}; /* Example: theme.spacing.small from your M3 theme */

  /* Material Design 3 Body Small typography */
  font-family: ${({ theme }) => theme.typography.label.small.fontFamily};
  font-size: ${({ theme }) => theme.typography.label.small.fontSize};
  font-weight: ${({ theme }) => theme.typography.label.small.fontWeight};
  line-height: ${({ theme }) => theme.typography.label.small.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.label.small.letterSpacing};

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