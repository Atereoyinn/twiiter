import { Container } from "../../styles/globalStyle"
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main/index.js";
import Trend from "../../components/Trend/index.js";

const HomePage = () => {
  return (
    <Container>
    <Sidebar />
    <Main />
    <Trend />
</Container>
  )
}

export default HomePage