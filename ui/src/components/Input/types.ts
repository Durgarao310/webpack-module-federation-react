import React from 'react';

/**
 * Defines the core properties for an Input component.
 */
export interface InputProps {
  /**
   * The HTML input type attribute.
   * Defaults to 'text'.
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  
  /**
   * Placeholder text for the input field.
   */
  placeholder?: string;
  
  /**
   * The current value of the input field.
   */
  value?: string;
  
  /**
   * Callback function called when the input value changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * If `true`, the input will be disabled and non-interactive.
   */
  isDisabled?: boolean;
  
  /**
   * If `true`, the input field is required.
   */
  isRequired?: boolean;
  
  /**
   * If `true`, displays the input in an error state.
   */
  hasError?: boolean;
  
  /**
   * The visual size of the input field.
   * Defaults to 'medium'.
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * The visual variant of the input field.
   * Defaults to 'outlined'.
   */
  variant?: 'outlined' | 'filled' | 'standard';
  
  /**
   * If `true`, the input will take up the full width of its parent container.
   */
  isFullWidth?: boolean;
  
  /**
   * Optional label text for the input field.
   */
  label?: string;
  
  /**
   * Optional helper text displayed below the input.
   */
  helperText?: string;
  
  /**
   * Optional error message displayed when hasError is true.
   */
  errorMessage?: string;
  
  /**
   * Optional icon displayed at the start of the input.
   */
  startIcon?: React.ReactNode;
  
  /**
   * Optional icon displayed at the end of the input.
   */
  endIcon?: React.ReactNode;
  
  /**
   * Additional CSS class name.
   */
  className?: string;
  
  /**
   * The name attribute for the input field.
   */
  name?: string;
  
  /**
   * The id attribute for the input field.
   */
  id?: string;
  
  /**
   * Callback function called when the input is focused.
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Callback function called when the input loses focus.
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Maximum length of the input value.
   */
  maxLength?: number;
  
  /**
   * Minimum length of the input value.
   */
  minLength?: number;
  
  /**
   * Pattern for input validation.
   */
  pattern?: string;
  
  /**
   * If `true`, the input will be read-only.
   */
  readOnly?: boolean;
  
  /**
   * Auto-complete attribute for the input.
   */
  autoComplete?: string;
  
  /**
   * If `true`, the input will automatically receive focus when mounted.
   */
  autoFocus?: boolean;
}

/**
 * Forward ref component type for Input.
 */
export type InputComponent = React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>;