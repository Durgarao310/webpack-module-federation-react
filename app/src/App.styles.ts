import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    // add other theme properties if needed
  }
}

export const StyledAppContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  transition: all 0.25s linear;
`;
