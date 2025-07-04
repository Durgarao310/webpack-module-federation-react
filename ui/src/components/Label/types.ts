// src/components/FormComponents/Label/Label.types.ts
import React from 'react';

export interface LabelProps {
  /**
   * The text content of the label.
   */
  children: React.ReactNode;
  /**
   * Optional starting icon for the label.
   */
  startingIcon?: React.ReactNode;
  /**
   * Optional ending icon for the label.
   */
  endIcon?: React.ReactNode;
  /**
   * Associates the label with a form element by its ID.
   */
  htmlFor?: string;
  /**
   * Specifies if the label should indicate an error state.
   * This will apply M3 error color to the label text.
   */
  isError?: boolean;
  /**
   * Specifies if the label should indicate a disabled state.
   * This will apply M3 disabled color to the label text.
   */
  isDisabled?: boolean;
}