import { MoreHorizOutlined, Verified } from "@mui/icons-material";
import {
  Image,
  Name,
  NameContainer,
  Username,
} from "../../styles/sideBarStyle";
import {
  NameWrapper,
  Post,
  PostBody,
  PostContent,
  PostWrapper,
} from "../../styles/mainStyle";

const PostContentContainer = () => {
  return (
    <PostWrapper>
      <Image />
      <PostContent>
        <NameWrapper>
          <NameContainer style={{ flexDirection: "row" }}>
            <Name>Ayuba Abiola</Name>
            <Username>@atereoyin</Username>
            <Verified
              style={{
                width: "17px",
                height: "17px",
                marginLeft: "5px",
                background: "whitesmoke",
                color: "skyblue",
                borderRadius: "50%",
              }}
            />
          </NameContainer>
          <MoreHorizOutlined />
        </NameWrapper>
        <PostBody>
          <Post>
            nw akh onf8cmopwj'pocp9tu9j'vt9ecjj'poctpmos jp9se9awmu,nw akh
            dgudglui dhbuiduil, onf8cmopwj'pocp9tu9j'vt9ecjj'poctpmos jp9se9awmu
          </Post>
        </PostBody>
      </PostContent>
    </PostWrapper>
  );
};

export default PostContentContainer;
