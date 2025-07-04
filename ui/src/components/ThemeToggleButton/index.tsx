import React from 'react';
import styled from 'styled-components';
import { useThemeMode } from '../../theme/provider';
import { Sun, Moon } from 'lucide-react';

// --- Toggle Track
const ToggleButton = styled.button<{ $isDark: boolean }>`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;

  width: 70px;
  height: 36px;
  border-radius: 999px;
  background-color: ${({ theme, $isDark }) =>
    $isDark
      ? theme.colors.surface
      : theme.colors.onSurface.withOpacity(0.08)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  position: relative;
  transition: background-color 0.3s ease;
  box-sizing: border-box;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

// --- Toggle Thumb
const Thumb = styled.div<{ $active: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.onSurface.withOpacity(0.1)};
  position: absolute;
  top: 4px;
  left: ${({ $active }) => ($active ? '5px' : 'calc(100% - 33px)')};
  transition: left 0.3s ease;
  z-index: 1;
`;

// --- Icons
const Icon = styled.span<{ $faded: boolean }>`
  font-size: 16px;
  opacity: ${({ $faded }) => ($faded ? 0.4 : 1)};
  color: ${({ theme }) => theme.colors.onSurface.withOpacity(1)};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const ThemeToggleButton = () => {
  const { theme, toggle } = useThemeMode();
  const isDark = theme === 'dark';

  return (
    <ToggleButton
      onClick={toggle}
      $isDark={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={isDark}
    >
      <Icon $faded={!isDark}>
        <Sun size={18} />
      </Icon>
      <Icon $faded={isDark}>
        <Moon size={18} />
      </Icon>
      <Thumb $active={!isDark} />
    </ToggleButton>
  );
};

export default ThemeToggleButton;
