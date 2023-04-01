import {
  Twitter,
  Bookmark,
  Home,
  InboxOutlined,
  ListAltOutlined,
  MoreHorizOutlined,
  NotificationAdd,
  Person2TwoTone,
} from "@mui/icons-material";
import { HashTag, SideBar } from "../../styles/sideBarStyle";
import ButtonComp from "./ButtonComp";
import Icons from "./Icons";
import MiniProfile from "./MiniProfile";
const index = () => {
  const iconStyle = { padding: "20px" };
  return (
    <SideBar>
      <Twitter
        style={{
          padding: "20px",
          fontSize: "40px",
          marginRight: "auto",
          color: "#1da1f2",
        }}
      />
      <Icons text="Home" icon={<Home style={iconStyle} />} />
      <Icons text="Explore" icon={<HashTag style={iconStyle}>#</HashTag>} />
      <Icons text="Notification" icon={<NotificationAdd style={iconStyle} />} />
      <Icons text="Messages" icon={<InboxOutlined style={iconStyle} />} />
      <Icons text="Bookmarks" icon={<Bookmark style={iconStyle} />} />
      <Icons text="Lists" icon={<ListAltOutlined style={iconStyle} />} />
      <Icons text="Profile" icon={<Person2TwoTone style={iconStyle} />} />
      <Icons text="More" icon={<MoreHorizOutlined style={iconStyle} />} />
      <ButtonComp />
      <MiniProfile />
    </SideBar>
  );
};

export default index;
