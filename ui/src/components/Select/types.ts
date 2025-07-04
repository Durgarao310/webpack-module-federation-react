import React from 'react';

/**
 * Defines option structure for Select component
 */
export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

/**
 * Defines the core properties for a Select component.
 */
export interface SelectProps {
  /**
   * Array of options to be displayed in the select dropdown
   */
  options: SelectOption[];
  
  /**
   * The currently selected value
   */
  value?: string | number;
  
  /**
   * Default value for uncontrolled component
   */
  defaultValue?: string | number;
  
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  
  /**
   * If `true`, the select will be disabled and non-interactive.
   */
  disabled?: boolean;
  
  /**
   * If `true`, the select will display an error state.
   */
  error?: boolean;
  
  /**
   * Error message to display below the select
   */
  errorMessage?: string;
  
  /**
   * Helper text to display below the select
   */
  helperText?: string;
  
  /**
   * Label text to display above the select
   */
  label?: string;
  
  /**
   * The visual size of the select.
   * Defaults to 'medium'.
   */
  size?: "small" | "medium" | "large";
  
  /**
   * The color theme variant for the select.
   * Defaults to 'primary'.
   */
  color?: "primary" | "secondary" | "error" | "success" | "warning";
  
  /**
   * If `true`, the select will take up the full width of its parent container.
   */
  fullWidth?: boolean;
  
  /**
   * If `true`, the user must select an option before form submission.
   */
  required?: boolean;
  
  /**
   * Callback fired when the select value changes.
   */
  onChange?: (value: string | number, option: SelectOption) => void;
  
  /**
   * Callback fired when the select gains focus.
   */
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  
  /**
   * Callback fired when the select loses focus.
   */
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  
  /**
   * The name attribute for the select element.
   */
  name?: string;
  
  /**
   * Additional CSS class name for custom styling.
   */
  className?: string;
  
  /**
   * The id attribute for the select element.
   */
  id?: string;
  
  /**
   * Icon to display on the left side of the select
   */
  startIcon?: React.ReactNode;
  
  /**
   * Custom dropdown icon (replaces default chevron)
   */
  dropdownIcon?: React.ReactNode;
}

/**
 * Select component type definition with ref forwarding support
 */
export type SelectComponent = React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<HTMLSelectElement>
>;
