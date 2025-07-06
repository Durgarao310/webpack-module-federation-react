import { ReactNode } from 'react';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  title?: string;
}
