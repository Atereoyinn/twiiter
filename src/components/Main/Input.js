import { Horizontal, InputField, InputWrapper } from "../../styles/mainStyle";
import { Text } from "../../styles/sideBarStyle";
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import HeadIcons from "./HeadIcons";
import { useState } from "react";

const Input = () => {
  const [tweet,setTweet] = useState("");
  const handleChange = e =>setTweet(e.target.value);
  return (
    <InputWrapper>
      <InputField placeholder="What's happening?" typeof="string" value={tweet} onChange={handleChange}/>
      {console.log(tweet)}
      <Text style={{ display:"flex",justifyContent:"flex-start",alignItems:"center",padding: "0px", margin: "0px", color: "skyblue" }}>
        <LanguageTwoToneIcon /> Everyone can reply
      </Text>
      <Horizontal />
      <HeadIcons />
    </InputWrapper>
  );
};

export default Input;
