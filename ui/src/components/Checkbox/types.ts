import React from 'react';
import { AppTheme } from '../../theme/types';

/**
 * Checkbox size variants
 */
export type CheckBoxSize = 'small' | 'medium' | 'large';

/**
 * Checkbox color variants
 */
export type CheckBoxVariant = 'primary' | 'secondary' | 'success' | 'error';

/**
 * Styled component props for theming
 */
export interface StyledCheckBoxProps {
  theme: AppTheme;
  $size?: CheckBoxSize;
  $variant?: CheckBoxVariant;
  $disabled?: boolean;
  $checked?: boolean;
}

/**
 * Simple checkbox component props
 */
export interface CheckBoxProps {
  /**
   * The current checked state of the checkbox.
   */
  checked?: boolean;
  /**
   * The label text displayed next to the checkbox.
   */
  label?: string;
  /**
   * Callback function invoked when the checkbox state changes.
   */
  onChange?: (checked: boolean) => void;
  /**
   * If `true`, the checkbox will be disabled and non-interactive.
   */
  disabled?: boolean;
  /**
   * Size variant of the checkbox
   */
  size?: CheckBoxSize;
  /**
   * Color variant of the checkbox
   */
  variant?: CheckBoxVariant;
  /**
   * Additional CSS class name for the container
   */
  className?: string;
  /**
   * Custom styles for the container
   */
  style?: React.CSSProperties;
  /**
   * Optional test id for testing purposes
   */
  'data-testid'?: string;
}
