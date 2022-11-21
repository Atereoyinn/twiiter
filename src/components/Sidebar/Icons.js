import { IconWrapper, Text } from "../../styles/sideBarStyle";

const Icons = ({text,icon}) => {
  return (
      <IconWrapper>
        {icon}
        <Text>{text}</Text>
      </IconWrapper>
  );
};

export default Icons;
