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
      <Image src="oyin.jpg" alt="Profile Picture"/>
      <PostContent>
        <NameWrapper>
          <NameContainer style={{ flexDirection: "row" }}>
            <Name>Ayuba Abiola</Name>
            <Username>@atereoyin</Username>
            <Verified
              style={{
                width: "20px",
                height: "20px",
                marginLeft: "5px",
                color: "#1da1f2",
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
