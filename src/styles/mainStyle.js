import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 0.4;
  display: flex;
  flex-direction: column;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
export const TopSection = styled.div`
  display: flex;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
position: relative;
width: 10px;
height: 10px;
z-index: 9;
`

export const InputField = styled.textarea`
  background-color: black;
  border: none;
  color: whitesmoke;
`;
export const Horizontal = styled.hr`
  width: 95%;
  line-height: 0.5cm;
  color: grey;
`;

export const InputIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  flex: 2;
`;

export const NameWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PostStyle = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: whitesmoke;
`;
export const PostBody = styled.div`
  padding: 5px;
  margin: auto;
  width: 100%;
`;
export const Post = styled.p`
  font-size: 15px;
  padding: 0;
  margin: 0;
`;

export const PostContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PostIcons = styled.div`
  padding-left: 20px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
