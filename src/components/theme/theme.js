import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#35B9FF",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#9ED7FF",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
    body{
      background-color: ${(props) => props.theme.body}
    }
`;
