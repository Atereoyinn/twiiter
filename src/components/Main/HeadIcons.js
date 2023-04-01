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
    <InputIcons style={{ color:"#1da1f2"}}>
      <Icons>
      {clicked ? <Input type="file"/> : <PermMediaTwoTone onClick={()=>setClicked(!clicked)}/>}
        
        <GifBoxTwoTone />
        <PollTwoTone />
        <EmojiEmotionsTwoTone />
        <ScheduleRounded />
        <LocationOnTwoTone />
      </Icons>
      <ButtonContainer style={{padding:"10px",display:"flex",flex:"1",justifyContent:"flex-end"}}>
        <Button style={{width:"50%"}}>Tweet</Button>
      </ButtonContainer>
    </InputIcons>
  );
};

export default HeadIcons;
