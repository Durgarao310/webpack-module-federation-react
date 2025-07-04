import React, { forwardRef } from 'react';
import { InputProps, InputComponent } from './types';
import HelperText from '../HelperText';
import {
  InputContainer,
  InputLabel,
  InputWrapper,
  StyledInput,
  InputIcon
} from './style';

const Input: InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      placeholder,
      value,
      onChange,
      isDisabled = false,
      isRequired = false,
      hasError = false,
      size = 'medium',
      variant = 'outlined',
      isFullWidth = false,
      label,
      helperText,
      errorMessage,
      startIcon,
      endIcon,
      className,
      name,
      id,
      onFocus,
      onBlur,
      maxLength,
      minLength,
      pattern,
      readOnly = false,
      autoComplete,
      autoFocus = false,
      ...rest
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const displayHelperText = hasError ? errorMessage : helperText;

    return (
      <InputContainer isFullWidth={isFullWidth} className={className}>
        {label && (
          <InputLabel 
            htmlFor={inputId} 
            isRequired={isRequired}
            hasError={hasError}
          >
            {label}
          </InputLabel>
        )}
        
        <InputWrapper>
          {startIcon && (
            <InputIcon position="start">
              {startIcon}
            </InputIcon>
          )}
          
          <StyledInput
            ref={ref}
            id={inputId}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={isDisabled}
            required={isRequired}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
            readOnly={readOnly}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            hasError={hasError}
            size={size}
            variant={variant}
            aria-describedby={displayHelperText ? `${inputId}-helper-text` : undefined}
            aria-invalid={hasError}
            style={{
              paddingLeft: startIcon ? '2.5rem' : undefined,
              paddingRight: endIcon ? '2.5rem' : undefined,
            }}
            {...rest}
          />
          
          {endIcon && (
            <InputIcon position="end">
              {endIcon}
            </InputIcon>
          )}
        </InputWrapper>
        
        {displayHelperText && (
          <HelperText 
            hasError={hasError}
            id={`${inputId}-helper-text`}
            size="small"
          >
            {displayHelperText}
          </HelperText>
        )}
      </InputContainer>
    );
  }
);

Input.displayName = 'Input';

export default Input;
