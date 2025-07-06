import React from "react";
import {
  DialogOverlay,
  DialogContainer,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "./style";
import { DialogProps } from "./types";

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  header,
  children,
  footer,
}) => {
  if (!isOpen) return null;

  return (
    <DialogOverlay onClick={onClose}>
      <DialogContainer onClick={(e) => e.stopPropagation()}>
        {header && <DialogHeader>{header}</DialogHeader>}
        <DialogBody>{children}</DialogBody>
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContainer>
    </DialogOverlay>
  );
};

export default Dialog;
