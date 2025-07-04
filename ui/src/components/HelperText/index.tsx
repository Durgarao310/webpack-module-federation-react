import React, { forwardRef } from 'react';
import { HelperTextProps, HelperTextComponent } from './types';
import { StyledHelperText, HelperTextContent, HelperTextIcon } from './style';

const HelperText: HelperTextComponent = forwardRef<HTMLDivElement, HelperTextProps>(
  (
    {
      children,
      hasError = false,
      size = 'medium',
      className,
      id,
      srOnly = false,
      color,
      startIcon,
      isSubtle = false,
      ...rest
    },
    ref
  ) => {
    if (!children) return null;

    const content = startIcon ? (
      <HelperTextContent>
        <HelperTextIcon>
          {startIcon}
        </HelperTextIcon>
        <span>{children}</span>
      </HelperTextContent>
    ) : (
      children
    );

    return (
      <StyledHelperText
        ref={ref}
        id={id}
        className={className}
        hasError={hasError}
        size={size}
        srOnly={srOnly}
        color={color}
        isSubtle={isSubtle}
        role={hasError ? 'alert' : undefined}
        aria-live={hasError ? 'polite' : undefined}
        {...rest}
      >
        {content}
      </StyledHelperText>
    );
  }
);

HelperText.displayName = 'HelperText';

export default HelperText;
