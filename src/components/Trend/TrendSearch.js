import { SearchOutlined } from "@mui/icons-material";
import { TrendInput, TrendInputContainer } from "../../styles/TrendStyle";

const TrendSearch = () => {
  return (
    <TrendInputContainer>
      <TrendInput placeholder="Search Twitter" />
      <SearchOutlined
        style={{
          position: "absolute",
          top: "55px",
          left: "30px",
          color: "darkgrey",
        }}
      />
    </TrendInputContainer>
  );
};

export default TrendSearch;
