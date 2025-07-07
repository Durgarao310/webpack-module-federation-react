import styled from 'styled-components';

export const RadioContainer = styled.label<{
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-size: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '16px' : '14px')};
`;

export const RadioInput = styled.input`
  display: none;
`;

export const RadioCircle = styled.div<{
  checked: boolean;
  size?: 'small' | 'medium' | 'large';
}>`
  width: ${({ size }) => (size === 'small' ? '16px' : size === 'large' ? '24px' : '20px')};
  height: ${({ size }) => (size === 'small' ? '16px' : size === 'large' ? '24px' : '20px')};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin-right: 8px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ size }) => (size === 'small' ? '8px' : size === 'large' ? '12px' : '10px')};
    height: ${({ size }) => (size === 'small' ? '8px' : size === 'large' ? '12px' : '10px')};
    border-radius: 50%;
    background-color: ${({ theme, checked }) =>
      checked ? theme.colors.primary : 'transparent'};
    transition: background-color 0.2s;
  }
`;
