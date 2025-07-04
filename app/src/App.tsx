import React from "react";
const RemoteApp = React.lazy(() => import("ui/App"));
const Button = React.lazy(() => import("ui/Button"));
const Input = React.lazy(() => import("ui/Input"));
const Label = React.lazy(() => import("ui/Label"));
const ThemeProvider = React.lazy(() => import("ui/ThemeProvider"));

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <React.Suspense fallback="Loading UI...">
        <ThemeProvider>
          <RemoteApp />
          <Button />
          <Input type="text" placeholder="Type here..." />
          <Label
            text="This is a label"
            startingIcon={<span>🔍</span>}
            endIcon={<span>✔️</span>}
          />
        </ThemeProvider>
      </React.Suspense>
    </div>
  );
};

export default App;
