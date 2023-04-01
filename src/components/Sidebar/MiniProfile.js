import { MoreHorizOutlined } from "@mui/icons-material";
import {  Image, Profile, Name, NameContainer, Username } from "../../styles/sideBarStyle";

const MiniProfile = () => {
  return (
    <Profile>
        <Image src="oyin.jpg" alt="Profile Picture"/>
        <NameContainer>
          <Name>Ayuba Abiola</Name>
          <Username>@atereoyin</Username>
        </NameContainer>
        <MoreHorizOutlined />
      </Profile>
  )
}

export default MiniProfile