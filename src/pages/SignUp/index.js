import { Twitter, Google, Apple } from "@mui/icons-material";
import { HR, P, LineCont, LoginContainer, Logo, TextContainer, Txt, ParagraphLink, LinkTag } from "../../styles/loginStyle";
import LoginButton from "../../components/LoginButton";

const index = () => {
  return (
    <LoginContainer>
      <Logo>
        <Twitter style={{color:`var(--secondary-color)`}}/>
      </Logo>
      <TextContainer>
        <Txt>Join Twitter today</Txt>
      </TextContainer>
      <div>
        <LoginButton text=" Sign in with Google" logo={<Google/>} />
        <LoginButton text=" Sign in with Apple" logo={<Apple/>} />
        <LineCont>
        <HR/>
        <P>or</P>
        <HR/>
        </LineCont>
        
        <LoginButton text="Next" color="white" bg="black"/>
       
        <ParagraphLink>
          <p >
            By signing up, you agree to the <LinkTag href="">Terms of Service</LinkTag> and <LinkTag href="">Privacy Policy</LinkTag>, including <LinkTag href="">Cookie Use.</LinkTag>
          </p>
        </ParagraphLink>
        <ParagraphLink style={{justifyContent:"flex-start"}}>
          <p>
            Have an account already?<LinkTag href="">Log in</LinkTag>
          </p>
        </ParagraphLink>
      </div>
    </LoginContainer>
  )
}

export default index