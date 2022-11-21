import {
  CommentOutlined,
  FavoriteBorderOutlined,
  FileUploadOutlined,
  RefreshOutlined,
} from "@mui/icons-material";
import { PostIcons } from "../../styles/mainStyle";

const PostIcon = () => {
  return (
    <PostIcons>
      <CommentOutlined />
      <RefreshOutlined />
      <FavoriteBorderOutlined />
      <FileUploadOutlined />
    </PostIcons>
  );
};

export default PostIcon;
