import styled, { css } from 'styled-components';

export const MultiSelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.button`
  display: flex;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  min-height: 2.5rem;
  height: auto;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

export const Badge = styled.div<{
  variant?: 'default' | 'secondary' | 'destructive' | 'inverted';
}>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;

  ${({ theme, variant }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.onPrimary};
        `;
      case 'destructive':
        return css`
          background-color: ${theme.colors.error};
          color: ${theme.colors.onPrimary};
        `;
      default:
        return css`
          background-color: ${theme.colors.surface};
          color: ${theme.colors.onSurface.highEmphasis};
          border: 1px solid ${theme.colors.divider};
        `;
    }
  }}
`;

export const PopoverContent = styled.div`
  width: auto;
  padding: 0;
  margin-top: 0.25rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const Command = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommandInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.onSurface.highEmphasis};

  &:focus {
    outline: none;
  }
`;

export const CommandList = styled.div`
  max-height: 15rem;
  overflow-y: auto;
`;

export const CommandEmpty = styled.div`
  padding: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.onSurface.mediumEmphasis};
`;

export const CommandGroup = styled.div`
  padding: 0.25rem 0;
`;

export const CommandItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

export const CommandSeparator = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  margin: 0.25rem 0;
`;

export const CheckboxIndicator = styled.div<{ isSelected: boolean }>`
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
  border: 1px solid;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isSelected }) => (isSelected ? '#000' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};

  svg {
    visibility: ${({ isSelected }) => (isSelected ? 'visible' : 'hidden')};
  }
`;
