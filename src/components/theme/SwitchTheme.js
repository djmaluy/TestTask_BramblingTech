import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export const SwitchTheme = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp />
      <button onClick={() => themeToggler()}>Сменить тему</button>
    </ThemeProvider>
  );
};
