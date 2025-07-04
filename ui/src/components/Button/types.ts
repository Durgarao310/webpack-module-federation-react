import React from 'react';

/**
 * Defines the core properties for a Button component.
 */
export interface ButtonProps {
  /**
   * The content to be rendered inside the button. This can be text,
   * an icon, or any other valid React node.
   */
  children: React.ReactNode;
  /**
   * Optional icon displayed at the beginning of the button's content.
   */
  startIcon?: React.ReactNode;
  /**
   * Optional icon displayed at the end of the button's content.
   */
  endIcon?: React.ReactNode;
  /**
   * If `true`, the button will be disabled and non-interactive.
   */
  isDisabled?: boolean;
  /**
   * The visual size of the button's typography and padding.
   * Defaults to 'medium'.
   */
  size?: "small" | "medium" | "large";
  /**
   * If `true`, the button will display a loading indicator and
   * typically become non-interactive.
   */
  isLoading?: boolean;
  /**
   * If `true`, the button will take up the full width of its parent container.
   */
  isFullWidth?: boolean;
  /**
   * The native HTML `type` attribute for the button.
   * Defaults to 'button'.
   */
  type?: "button" | "submit" | "reset";
  /**
   * The visual variant of the button, dictating its overall style.
   * Defaults to 'filled'.
   */
  variant?: "filled" | "outlined" | "text";
  /**
   * The color theme of the button.
   * Defaults to 'primary'.
   */
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  /**
   * Callback function invoked when the button is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Additional CSS class names to apply to the button element.
   */
  className?: string;
  /**
   * Any other standard HTML button attributes.
   */
  [x: string]: any; // Allows for any other valid HTML button attribute
}

/**
 * Extends ButtonProps to include a ref for direct DOM access.
 */
export interface ButtonPropsWithRef extends ButtonProps {
  /**
   * Ref to the underlying HTML button element, allowing direct DOM interaction.
   */
  ref?: React.Ref<HTMLButtonElement>;
}

/**
 * Represents a React functional component that forwards its ref to the
 * underlying HTML button element.
 */
export type ButtonComponent = React.ForwardRefExoticComponent<
  ButtonPropsWithRef & React.RefAttributes<HTMLButtonElement>
>;