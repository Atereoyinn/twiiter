import {
  Button,
  Image,
  Name,
  NameContainer,
  Profile,
  Username,
} from "../../styles/sideBarStyle";

const WhoToFollowCard = () => {
  return (
    <Profile style={{ width: "100%",height:"40px", justifyContent: "space-between" }}>
      <Image />
      <NameContainer>
        <Name style={{ fontSize: "12px" }}>John Smith</Name>
        <Username style={{ fontSize: "10px", margin: "auto" }}>
          @That...Follows you
        </Username>
      </NameContainer>
      <Button
        style={{
          width: "40%",
          margin: "10px",
          background: "black",
        }}
      >
        Follow
      </Button>
    </Profile>
  );
};

export default WhoToFollowCard;
