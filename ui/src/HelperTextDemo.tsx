import React from 'react';
import HelperText from './components/HelperText';
import ThemeProvider, { useThemeMode } from './components/ThemeProvider';
import styled from 'styled-components';

const DemoContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.onSurface.highEmphasis};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
`;

const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ExampleCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.componentSizes.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.divider};
`;

const ExampleTitle = styled.h4`
  color: ${({ theme }) => theme.colors.onSurface.highEmphasis};
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
`;

const CodeBlock = styled.pre`
  background-color: ${({ theme }) => theme.colors.onSurface.withOpacity(0.05)};
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 0.875rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.onSurface.mediumEmphasis};
`;

const Spacer = styled.div`
  margin: 0.75rem 0;
`;

const HelperTextDemoContent = () => {
  const { theme, toggle } = useThemeMode();

  return (
    <DemoContainer>
      <Section>
        <SectionTitle>HelperText Component Demo</SectionTitle>
        
        <button 
          onClick={toggle}
          style={{ 
            marginBottom: '2rem',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
        </button>

        <p>
          The HelperText component is a reusable utility component designed to provide 
          consistent helper text styling across all form components in the design system.
        </p>
      </Section>

      <Section>
        <SectionTitle>Basic Usage</SectionTitle>
        <ExampleGrid>
          <ExampleCard>
            <ExampleTitle>Default Helper Text</ExampleTitle>
            <HelperText>
              This is default helper text providing additional information to users.
            </HelperText>
            <CodeBlock>{`<HelperText>
  This is default helper text
</HelperText>`}</CodeBlock>
          </ExampleCard>

          <ExampleCard>
            <ExampleTitle>Error State</ExampleTitle>
            <HelperText hasError>
              This field is required and cannot be empty.
            </HelperText>
            <CodeBlock>{`<HelperText hasError>
  This field is required
</HelperText>`}</CodeBlock>
          </ExampleCard>
        </ExampleGrid>
      </Section>

      <Section>
        <SectionTitle>Size Variations</SectionTitle>
        <ExampleGrid>
          <ExampleCard>
            <ExampleTitle>Small Size</ExampleTitle>
            <HelperText size="small">
              Small helper text for compact forms or detailed information.
            </HelperText>
            <Spacer />
            <HelperText size="small" hasError>
              Small error message with reduced visual weight.
            </HelperText>
          </ExampleCard>

          <ExampleCard>
            <ExampleTitle>Medium Size (Default)</ExampleTitle>
            <HelperText size="medium">
              Medium helper text provides balanced readability and spacing.
            </HelperText>
            <Spacer />
            <HelperText size="medium" hasError>
              Medium error message for standard form validation.
            </HelperText>
          </ExampleCard>

          <ExampleCard>
            <ExampleTitle>Large Size</ExampleTitle>
            <HelperText size="large">
              Large helper text for emphasis or accessibility requirements.
            </HelperText>
            <Spacer />
            <HelperText size="large" hasError>
              Large error message for critical validation failures.
            </HelperText>
          </ExampleCard>
        </ExampleGrid>
      </Section>

      <Section>
        <SectionTitle>Color Variants</SectionTitle>
        <ExampleGrid>
          <ExampleCard>
            <ExampleTitle>Semantic Colors</ExampleTitle>
            <HelperText color="success">
              ✅ Operation completed successfully!
            </HelperText>
            <Spacer />
            <HelperText color="warning">
              ⚠️ Please review your input before proceeding.
            </HelperText>
            <Spacer />
            <HelperText color="error">
              ❌ An error occurred while processing your request.
            </HelperText>
            <Spacer />
            <HelperText color="info">
              ℹ️ Additional information about this field.
            </HelperText>
          </ExampleCard>

          <ExampleCard>
            <ExampleTitle>Brand Colors</ExampleTitle>
            <HelperText color="primary">
              Primary colored text for brand consistency.
            </HelperText>
            <Spacer />
            <HelperText color="secondary">
              Secondary colored text for alternative emphasis.
            </HelperText>
          </ExampleCard>
        </ExampleGrid>
      </Section>

      <Section>
        <SectionTitle>With Icons</SectionTitle>
        <ExampleGrid>
          <ExampleCard>
            <ExampleTitle>Icon Integration</ExampleTitle>
            <HelperText startIcon={<span>🔍</span>}>
              Search helper text with magnifying glass icon.
            </HelperText>
            <Spacer />
            <HelperText startIcon={<span>🔒</span>} hasError>
              Security validation failed - password too weak.
            </HelperText>
            <Spacer />
            <HelperText startIcon={<span>💡</span>} color="warning">
              Pro tip: Use a combination of letters, numbers, and symbols.
            </HelperText>
            <Spacer />
            <HelperText startIcon={<span>✨</span>} color="success">
              Perfect! Your input meets all requirements.
            </HelperText>
          </ExampleCard>

          <ExampleCard>
            <ExampleTitle>Complex Content</ExampleTitle>
            <HelperText startIcon={<span>📋</span>}>
              This helper text contains <strong>bold text</strong> and can include 
              <em> emphasized text</em> for rich content display.
            </HelperText>
            <Spacer />
            <HelperText startIcon={<span>🔗</span>} color="primary">
              Links and interactive content can be embedded within helper text for 
              enhanced user guidance.
            </HelperText>
          </ExampleCard>
        </ExampleGrid>
      </Section>

      <Section>
        <SectionTitle>Special Variants</SectionTitle>
        <ExampleGrid>
          <ExampleCard>
            <ExampleTitle>Subtle Text</ExampleTitle>
            <HelperText>
              Normal helper text with standard opacity.
            </HelperText>
            <Spacer />
            <HelperText isSubtle>
              Subtle helper text with reduced opacity for less emphasis.
            </HelperText>
            <CodeBlock>{`<HelperText isSubtle>
  Subtle helper text
</HelperText>`}</CodeBlock>
          </ExampleCard>

          <ExampleCard>
            <ExampleTitle>Screen Reader Only</ExampleTitle>
            <p>The following helper text is hidden visually but available to screen readers:</p>
            <HelperText srOnly id="sr-only-example">
              This text is only available to assistive technologies.
            </HelperText>
            <p><em>(Check with a screen reader to verify accessibility)</em></p>
            <CodeBlock>{`<HelperText srOnly>
  Screen reader only text
</HelperText>`}</CodeBlock>
          </ExampleCard>
        </ExampleGrid>
      </Section>

      <Section>
        <SectionTitle>Form Integration</SectionTitle>
        <ExampleCard>
          <ExampleTitle>Accessibility Best Practices</ExampleTitle>
          <p>
            The HelperText component automatically includes proper ARIA attributes 
            when used with form controls:
          </p>
          <ul>
            <li><code>role="alert"</code> for error states</li>
            <li><code>aria-live="polite"</code> for dynamic error messages</li>
            <li>Support for <code>aria-describedby</code> linking</li>
          </ul>
          
          <Spacer />
          
          <div>
            <label htmlFor="demo-input" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Email Address
            </label>
            <input 
              id="demo-input"
              type="email"
              placeholder="Enter your email"
              aria-describedby="demo-helper"
              style={{ 
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%',
                marginBottom: '0.5rem'
              }}
            />
            <HelperText id="demo-helper" startIcon={<span>✉️</span>}>
              We'll never share your email with anyone else.
            </HelperText>
          </div>
        </ExampleCard>
      </Section>
    </DemoContainer>
  );
};

const HelperTextDemo = () => {
  return (
    <ThemeProvider>
      <HelperTextDemoContent />
    </ThemeProvider>
  );
};

export default HelperTextDemo;
