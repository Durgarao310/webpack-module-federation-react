import React, { useState } from 'react';
import styled from 'styled-components';
import { Select, Button, ThemeToggleButton } from './components';
import { SelectOption } from './components/Select/types';

const StyledContainer = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  transition: all 0.25s linear;
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
`;

const DemoSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.componentSizes.borderRadius};
  background-color: ${({ theme }) => theme.colors.surface};
`;

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
`;

const DemoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ThemeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

// Sample data for Select component demos
const countryOptions: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
  { value: 'in', label: 'India' },
];

const priorityOptions: SelectOption[] = [
  { value: 'low', label: 'Low Priority' },
  { value: 'medium', label: 'Medium Priority' },
  { value: 'high', label: 'High Priority' },
  { value: 'urgent', label: 'Urgent' },
];

const statusOptions: SelectOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending', label: 'Pending' },
  { value: 'suspended', label: 'Suspended', disabled: true },
];

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | number>('');
  const [selectedPriority, setSelectedPriority] = useState<string | number>('medium');

  const handleCountryChange = (value: string | number, option: SelectOption) => {
    setSelectedCountry(value);
    console.log('Country selected:', value, option);
  };

  const handlePriorityChange = (value: string | number, option: SelectOption) => {
    setSelectedPriority(value);
    console.log('Priority selected:', value, option);
  };

  return (
    <StyledContainer>
      <ThemeHeader>
        <div>
          <h1>UI Micro-frontend</h1>
          <p>Select Component with Theme Support</p>
        </div>
        <ThemeToggleButton />
      </ThemeHeader>

      <DemoSection>
        <SectionTitle>Basic Select Examples</SectionTitle>
        <DemoGrid>
          <Select
            label="Country"
            placeholder="Choose your country"
            options={countryOptions}
            value={selectedCountry}
            onChange={handleCountryChange}
            helperText="Select your country of residence"
          />
          
          <Select
            label="Priority Level"
            options={priorityOptions}
            value={selectedPriority}
            onChange={handlePriorityChange}
            color="secondary"
            helperText="Set the priority level"
          />
        </DemoGrid>
      </DemoSection>

      <DemoSection>
        <SectionTitle>Size Variations</SectionTitle>
        <DemoGrid>
          <Select
            label="Small Select"
            size="small"
            options={statusOptions}
            placeholder="Small size"
            helperText="Small variant"
          />
          
          <Select
            label="Medium Select"
            size="medium"
            options={statusOptions}
            placeholder="Medium size"
            helperText="Medium variant (default)"
          />
          
          <Select
            label="Large Select"
            size="large"
            options={statusOptions}
            placeholder="Large size"
            helperText="Large variant"
          />
        </DemoGrid>
      </DemoSection>

      <DemoSection>
        <SectionTitle>State Variations</SectionTitle>
        <DemoGrid>
          <Select
            label="Error State"
            options={priorityOptions}
            placeholder="Select with error"
            error={true}
            errorMessage="This field is required"
          />
          
          <Select
            label="Disabled Select"
            options={priorityOptions}
            placeholder="This is disabled"
            disabled={true}
            helperText="This select is disabled"
          />
          
          <Select
            label="Required Field *"
            options={countryOptions}
            placeholder="Required selection"
            required={true}
            helperText="This field is required"
          />
        </DemoGrid>
      </DemoSection>

      <DemoSection>
        <SectionTitle>Color Variations</SectionTitle>
        <DemoGrid>
          <Select
            label="Primary Color"
            options={priorityOptions}
            color="primary"
            placeholder="Primary theme"
            helperText="Primary color variant"
          />
          
          <Select
            label="Secondary Color"
            options={priorityOptions}
            color="secondary"
            placeholder="Secondary theme"
            helperText="Secondary color variant"
          />
          
          <Select
            label="Success Color"
            options={priorityOptions}
            color="success"
            placeholder="Success theme"
            helperText="Success color variant"
          />
          
          <Select
            label="Warning Color"
            options={priorityOptions}
            color="warning"
            placeholder="Warning theme"
            helperText="Warning color variant"
          />
        </DemoGrid>
      </DemoSection>

      <DemoSection>
        <SectionTitle>Full Width Example</SectionTitle>
        <Select
          label="Full Width Select"
          options={countryOptions}
          placeholder="This select takes full width"
          fullWidth={true}
          helperText="This select spans the full width of its container"
        />
      </DemoSection>
    </StyledContainer>
  );
};

export default App;
