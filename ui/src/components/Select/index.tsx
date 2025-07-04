import React, { forwardRef, useState } from 'react';
import { SelectProps, SelectComponent } from './types';
import { 
  SelectContainer,
  SelectLabel,
  SelectWrapper,
  StyledSelect,
  StartIcon,
  DropdownIcon,
  HelperText,
  SelectOption
} from './style';

// Default chevron down icon
const ChevronDownIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M4 6L8 10L12 6" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const Select: SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      value,
      defaultValue,
      placeholder = "Select an option...",
      disabled = false,
      error = false,
      errorMessage,
      helperText,
      label,
      size = 'medium',
      color = 'primary',
      fullWidth = false,
      required = false,
      onChange,
      onFocus,
      onBlur,
      name,
      className,
      id,
      startIcon,
      dropdownIcon,
      ...rest
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState<string | number>(
      defaultValue || value || ''
    );

    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = event.target.value;
      const selectedOption = options.find(option => 
        String(option.value) === String(newValue)
      );

      if (value === undefined) {
        setInternalValue(newValue);
      }

      if (onChange && selectedOption) {
        onChange(selectedOption.value, selectedOption);
      }
    };

    const handleFocus = (event: React.FocusEvent<HTMLSelectElement>) => {
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
      onBlur?.(event);
    };

    const displayHelperText = error ? errorMessage : helperText;
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <SelectContainer fullWidth={fullWidth} className={className}>
        {label && (
          <SelectLabel 
            htmlFor={selectId}
            required={required}
            error={error}
          >
            {label}
          </SelectLabel>
        )}
        
        <SelectWrapper hasStartIcon={!!startIcon}>
          {startIcon && (
            <StartIcon size={size}>
              {startIcon}
            </StartIcon>
          )}
          
          <StyledSelect
            ref={ref}
            id={selectId}
            name={name}
            value={currentValue}
            disabled={disabled}
            error={error}
            size={size}
            color={color}
            fullWidth={fullWidth}
            required={required}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              paddingLeft: startIcon ? '40px' : undefined,
              paddingRight: '40px'
            }}
            {...rest}
          >
            {placeholder && (
              <SelectOption value="" disabled>
                {placeholder}
              </SelectOption>
            )}
            
            {options.map((option) => (
              <SelectOption
                key={String(option.value)}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </SelectOption>
            ))}
          </StyledSelect>
          
          <DropdownIcon size={size} disabled={disabled}>
            {dropdownIcon || <ChevronDownIcon />}
          </DropdownIcon>
        </SelectWrapper>
        
        {displayHelperText && (
          <HelperText error={error}>
            {displayHelperText}
          </HelperText>
        )}
      </SelectContainer>
    );
  }
);

Select.displayName = 'Select';

export default Select;
