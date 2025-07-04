import React from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";

const Button = React.lazy(() => import("ui/Button"));
const Input = React.lazy(() => import("ui/Input"));
const Label = React.lazy(() => import("ui/Label"));
const ThemeToggleButton = React.lazy(() => import("ui/ThemeToggleButton"));
const ThemeProvider = React.lazy(() => import("ui/ThemeProvider"));
const Checkbox  = React.lazy(() => import("ui/Checkbox"));

const StyledAppContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
  padding: 10px;
  display: flex;
`;

const App = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <React.Suspense fallback="Loading UI...">
      <ThemeProvider>
        <GlobalStyle />
        <StyledAppContainer>
          <ThemeToggleButton />
          <Button
            isDisabled={false}
            isLoading={true}
            size="medium"
            variant="filled"
            color="primary"
          >
            Click Me
          </Button>
          <Input type="text" placeholder="Type here..." />
          <Checkbox
            label="Check me"
            checked={isChecked}
            onChange={(checked: boolean) => setIsChecked(checked)}
            size="medium"
          />
       
          <Label
            htmlFor="input1"
            isError={false}
            isDisabled={false}
            size="large"
          >
            Input Label
          </Label>
        </StyledAppContainer>
      </ThemeProvider>
    </React.Suspense>
  );
};

export default App;
