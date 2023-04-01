import React from "react";
import { MainContainer } from "../../styles/mainStyle";
import { Text } from "../../styles/sideBarStyle";
import Form from "./Form";
import Post from "./Post";

const index = () => {
  return (
    <MainContainer>
      <Text style={{ paddingTop: "25px", color: "black" }}>Home</Text>
      <Form />
      <Post />
    </MainContainer>
  );
};

export default index;
