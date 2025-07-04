import React from 'react';

/**
 * Defines the core properties for a HelperText component.
 */
export interface HelperTextProps {
  /**
   * The text content to display.
   */
  children: React.ReactNode;
  
  /**
   * If `true`, displays the helper text in an error state with error styling.
   */
  hasError?: boolean;
  
  /**
   * The visual size of the helper text.
   * Defaults to 'medium'.
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Additional CSS class name.
   */
  className?: string;
  
  /**
   * The id attribute for the helper text element.
   * Useful for accessibility (aria-describedby).
   */
  id?: string;
  
  /**
   * If `true`, the helper text will be hidden visually but still accessible to screen readers.
   */
  srOnly?: boolean;
  
  /**
   * Custom color override for the helper text.
   * If not provided, uses theme colors based on hasError state.
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
  
  /**
   * Optional icon to display before the text.
   */
  startIcon?: React.ReactNode;
  
  /**
   * If `true`, the helper text will have reduced opacity to appear more subtle.
   */
  isSubtle?: boolean;
}

/**
 * Forward ref component type for HelperText.
 */
export type HelperTextComponent = React.ForwardRefExoticComponent<
  HelperTextProps & React.RefAttributes<HTMLDivElement>
>;
