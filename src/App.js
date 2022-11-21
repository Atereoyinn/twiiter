import { Container } from "./styles/globalStyle";
import Sidebar from "./components/Sidebar/index.js";
import Main from "./components/Main/index.js";
import Trend from "./components/Trend/index.js";

function App() {
  return (
    <Container>
    <Sidebar />
    <Main />
    <Trend />
</Container>
  
  );
}

export default App;
 
