import React from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";

const RemoteApp = React.lazy(() => import("ui/App"));
const Button = React.lazy(() => import("ui/Button"));
const Input = React.lazy(() => import("ui/Input"));
const Label = React.lazy(() => import("ui/Label"));
const ThemeToggleButton = React.lazy(() => import("ui/ThemeToggleButton"));
const ThemeProvider = React.lazy(() => import("ui/ThemeProvider"));

const StyledAppContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  transition: all 0.25s linear;
  padding:"10px"
  display: flex;
`;

const App = () => {
  return (
    <React.Suspense fallback="Loading UI...">
      <ThemeProvider>
        <GlobalStyle />
        <StyledAppContainer>
          <ThemeToggleButton />
          <RemoteApp />
          <Button  />
          <Input type="text" placeholder="Type here..." />
          <Label htmlFor="input1" isError={false} isDisabled={false} size="large" >
            Input Label
          </Label>
        </StyledAppContainer>
      </ThemeProvider>
    </React.Suspense>
  );
};

export default App;
