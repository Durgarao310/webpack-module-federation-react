import React from "react";
import { CheckBoxProps } from "./types";
import {
  StyledCheckBoxContainer,
  StyledCheckBox,
} from "./style";
import Label from "../Label";

const Checkbox: React.FC<CheckBoxProps> = ({
  checked = false,
  label,
  onChange,
  disabled = false,
  size = "medium",
  variant = "primary",
  className,
  style,
  "data-testid": dataTestId,
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange?.(event.target.checked);
  };

  // Map checkbox sizes to appropriate label sizes
  const getLabelSize = (checkboxSize: typeof size) => {
    const sizeMapping = {
      small: 'small' as const,
      medium: 'medium' as const,
      large: 'medium' as const, // Large checkbox with medium label for better balance
    };
    return sizeMapping[checkboxSize];
  };

  return (
    <StyledCheckBoxContainer
      $size={size}
      $variant={variant}
      $disabled={disabled}
      $checked={checked}
      className={className}
      style={style}
      data-testid={dataTestId}
    >
      <StyledCheckBox
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        $size={size}
        $variant={variant}
        $disabled={disabled}
        $checked={checked}
      />
      {label && (
        <Label
          size={getLabelSize(size)}
          isDisabled={disabled}
        >
          {label}
        </Label>
      )}
    </StyledCheckBoxContainer>
  );
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
