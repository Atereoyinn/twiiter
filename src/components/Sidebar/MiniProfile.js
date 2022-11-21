import { MoreHorizOutlined } from "@mui/icons-material";
import {  Image, Profile, Name, NameContainer, Username } from "../../styles/sideBarStyle";

const MiniProfile = () => {
  return (
    <Profile>
        <Image />
        <NameContainer>
          <Name>Ayuba Abiola</Name>
          <Username>@atereoyin</Username>
        </NameContainer>
        <MoreHorizOutlined />
      </Profile>
  )
}

export default MiniProfile