// components/Dialog/Dialog.styles.ts
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const DialogOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const DialogContainer = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.componentSizes.borderRadius};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 500px;
  max-width: 90%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideUp} 0.2s ease-out;

  @media (max-width: 480px) {
    width: 95%;
  }
`;

export const DialogHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  color: ${({ theme }) => theme.colors.onSurface.highEmphasis};
`;

export const DialogBody = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.onSurface.mediumEmphasis};
  flex-grow: 1;
  overflow-y: auto;
`;

export const DialogFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const DialogCloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.onSurface.mediumEmphasis};
  cursor: pointer;
  font-size: 1.25rem;
`;
