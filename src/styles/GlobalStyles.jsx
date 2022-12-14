import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.App {
  min-height: 100vh;
  height: 100vh;
  max-width: 100vh;
}

#root{
  display: flex;
  justify-content: center;
}
`;

export default GlobalStyle;
