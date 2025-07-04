import React, { useState } from 'react';
import Input from './components/Input';
import ThemeProvider, { useThemeMode } from './components/ThemeProvider';

const InputDemoContent = () => {
  const { theme, toggle } = useThemeMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    search: '',
  });
  
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: !formData.email.includes('@'),
      password: formData.password.length < 6,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  return (
    <div style={{ 
      padding: '2rem', 
      minHeight: '100vh',
    }}>
      <h1>Input Component Demo</h1>
      
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
        {/* Basic Input */}
        <Input
          label="Name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange('name')}
        />

        {/* Input with error */}
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange('email')}
          hasError={errors.email}
          errorMessage="Please enter a valid email address"
          isRequired
        />

        {/* Password input */}
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange('password')}
          hasError={errors.password}
          errorMessage="Password must be at least 6 characters"
          helperText="Minimum 6 characters required"
          isRequired
        />

        {/* Different variants */}
        <h3>Variants</h3>
        
        <Input
          variant="outlined"
          placeholder="Outlined variant"
          value={formData.search}
          onChange={handleInputChange('search')}
        />
        
        <Input
          variant="filled"
          placeholder="Filled variant"
          value={formData.search}
          onChange={handleInputChange('search')}
        />
        
        <Input
          variant="standard"
          placeholder="Standard variant"
          value={formData.search}
          onChange={handleInputChange('search')}
        />

        {/* Different sizes */}
        <h3>Sizes</h3>
        
        <Input
          size="small"
          placeholder="Small size"
          label="Small"
        />
        
        <Input
          size="medium"
          placeholder="Medium size"
          label="Medium"
        />
        
        <Input
          size="large"
          placeholder="Large size"
          label="Large"
        />

        {/* With icons */}
        <h3>With Icons</h3>
        
        <Input
          label="Search"
          placeholder="Search..."
          startIcon={<span>🔍</span>}
        />
        
        <Input
          label="Username"
          placeholder="Enter username"
          endIcon={<span>✓</span>}
        />

        {/* Full width */}
        <Input
          label="Full Width Input"
          placeholder="This input takes full width"
          isFullWidth
        />

        {/* Disabled */}
        <Input
          label="Disabled Input"
          placeholder="This input is disabled"
          isDisabled
          value="Disabled value"
        />

        <button 
          onClick={validateForm}
          style={{ 
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Validate Form
        </button>
      </div>
    </div>
  );
};

const InputDemo = () => {
  return (
    <ThemeProvider>
      <InputDemoContent />
    </ThemeProvider>
  );
};

export default InputDemo;
