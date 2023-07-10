import SignUp from "./pages/SignUp";
import Login from "./pages/login";
import HomePage from "./pages/homepage";
import { createGlobalStyle } from "styled-components";
import { fontFamily, colors } from "./styles/global.styles";
import SignUp2 from "./pages/SignUp/SignUp2";

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
      <SignUp2 />
      {/*<SignUp />
      <Login />
       <HomePage /> */}
    </>
  );
}

export default App;
