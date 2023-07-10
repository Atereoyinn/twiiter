import LoginInput from "../../components/LoginInput";
import { LoginContainer, TextContainer, Txt } from "../../styles/loginStyle";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useState } from "react";
import DateFormat from "./DateFormat";

const SignUp2 = () => {
  const [dob, setDob] = useState(null);

  const handleDateChange = (date) => {
    setDob(date);
  };
  return (
    <LoginContainer>
      <TextContainer>
        <Txt>Create your account</Txt>
      </TextContainer>
      <div>
        <LoginInput placeholder="Name" type="text" maxlength="50"/>
        <LoginInput placeholder="Phone" type="text" maxlength="11"/>
        <DateFormat />
      </div>
    </LoginContainer>
  );
};

export default SignUp2;
