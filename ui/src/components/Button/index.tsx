import React, { forwardRef } from 'react';
import { ButtonProps, ButtonComponent } from './types';
import { 
  StyledButton, 
  ButtonIcon, 
  LoadingSpinner, 
  ButtonContent, 
  LoadingWrapper 
} from './style';

const Button: ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      startIcon,
      endIcon,
      isDisabled = false,
      size = 'medium',
      isLoading = false,
      isFullWidth = false,
      type = 'button',
      variant = 'filled',
      color = 'primary',
      onClick,
      className,
      ...rest
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled || isLoading) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    return (
      <StyledButton
        ref={ref}
        type={type}
        disabled={isDisabled || isLoading}
        onClick={handleClick}
        className={className}
        size={size}
        variant={variant}
        color={color}
        isFullWidth={isFullWidth}
        isLoading={isLoading}
        {...rest}
      >
        {isLoading && (
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        )}
        
        <ButtonContent isLoading={isLoading}>
          {startIcon && (
            <ButtonIcon position="start">
              {startIcon}
            </ButtonIcon>
          )}
          
          {children}
          
          {endIcon && (
            <ButtonIcon position="end">
              {endIcon}
            </ButtonIcon>
          )}
        </ButtonContent>
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
