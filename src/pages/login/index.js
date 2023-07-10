import { Twitter, Google, Apple } from "@mui/icons-material";
import { HR, P, LineCont, LoginContainer, Logo, TextContainer, Txt, ParagraphLink, LinkTag } from "../../styles/loginStyle";
import LoginButton from "../../components/LoginButton";
import LoginInput from "../../components/LoginInput";

const index = () => {
  return (
    <LoginContainer>
      <Logo>
        <Twitter style={{color:`var(--secondary-color)`}}/>
      </Logo>
      <TextContainer>
        <Txt>Sign in to Twitter</Txt>
      </TextContainer>
      <div>
        <LoginButton text=" Sign in with Google" logo={<Google/>} />
        <LoginButton text=" Sign in with Apple" logo={<Apple/>} />
        <LineCont>
        <HR/>
        <P>or</P>
        <HR/>
        </LineCont>
        
        <LoginInput placeholder="Phone, email, or username" type="text"/>
        <LoginButton text="Next" color="white" bg="black"/>
       <LoginButton text="Forgot password?"/>
        <ParagraphLink>
          <p>
            Don't have an account?<LinkTag href="">Sign up</LinkTag>
          </p>
        </ParagraphLink>
      </div>
    </LoginContainer>
  );
};

export default index;
