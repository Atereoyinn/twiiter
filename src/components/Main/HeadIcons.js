import {
  EmojiEmotionsTwoTone,
  GifBoxTwoTone,
  LocationOnTwoTone,
  PermMediaTwoTone,
  PollTwoTone,
  ScheduleRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { Icons, Input, InputIcons } from "../../styles/mainStyle";
import { Button, ButtonContainer } from "../../styles/sideBarStyle";

const HeadIcons = () => {
  const [clicked,setClicked] = useState(false)

  return (
    <InputIcons>
      <Icons>
      {clicked ? <Input type="file"/> : <PermMediaTwoTone onClick={()=>setClicked(!clicked)}/>}
        
        <GifBoxTwoTone />
        <PollTwoTone />
        <EmojiEmotionsTwoTone />
        <ScheduleRounded />
        <LocationOnTwoTone />
      </Icons>
      <ButtonContainer style={{ width: "10vw", flex: "1" }}>
        <Button>Tweet</Button>
      </ButtonContainer>
    </InputIcons>
  );
};

export default HeadIcons;
