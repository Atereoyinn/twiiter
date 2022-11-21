import { FormContainer, TopSection } from "../../styles/mainStyle";
import { Image } from "../../styles/sideBarStyle";
import Input from "./Input";

const Form = () => {
  return (
    <FormContainer>
      <TopSection>
        <Image />
        <Input />
      </TopSection>
    </FormContainer>
  );
};

export default Form;
