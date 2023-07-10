import { LoginBtn, LoginBtnText, LoginButtonContainer } from "../styles/loginStyle"


const LoginButton = ({logo,text,bg,color}) => {
  return (
    <LoginButtonContainer>
        <LoginBtn style={{background:bg,color}}>
            <LoginBtnText>
            {logo} {text}
            </LoginBtnText>
        </LoginBtn>
    </LoginButtonContainer>
  )
}

export default LoginButton