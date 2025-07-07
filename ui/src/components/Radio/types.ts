export interface RadioProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}
