import { InputLogin, LoginInputCont } from "../styles/loginStyle";

const LoginInput = ({placeholder,type}) => {
  return (
    <LoginInputCont>
      <InputLogin placeholder={placeholder} type={type}/>
    </LoginInputCont>
  );
};

export default LoginInput;
