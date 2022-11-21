import { SearchOutlined } from "@mui/icons-material";
import { TrendInput, TrendInputContainer } from "../../styles/TrendStyle";

const TrendSearch = () => {
  return (
    <TrendInputContainer>
      <TrendInput placeholder="Search Twitter" />
      <SearchOutlined style={{position:"absolute",top:"41",left:"20",color:"gray"}} />
    </TrendInputContainer>
  );
};

export default TrendSearch;
