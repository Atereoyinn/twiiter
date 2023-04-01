import HomePage from "./pages/homepage/HomePage";
import { createGlobalStyle } from "styled-components";
import { fontFamily, colors } from "./styles/global.styles";

const GlobalStyle = createGlobalStyle`
:root{
  ${colors}
  ${fontFamily}
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
}

export default App;
