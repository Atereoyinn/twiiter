import styled from "styled-components";

export const SideBar = styled.div`
 height: 100%;
 padding: 25px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex: 0.3;
  min-width: 250px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;
  color: whitesmoke;
  &:hover{
    background-color: rgb(108, 125, 141,0.2);
    font-size: 25px;
    border-radius: 40px;
  }
`

export const Text = styled.h4`
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;
`

export const HashTag = styled.h4`
  font-size: 20px;
  font-weight: bolder;
`;

export const ButtonContainer = styled.div`
padding: 20px;
margin-right: auto;
width: 15vw;

`

export const Button = styled.button`
width: 100%;
height: 40px;
border-radius: 25px;
font-size: 20px;
font-weight: 400;
background-color:  rgb(78, 201, 255);
color: whitesmoke;
`

export const Profile = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding: 15px;
margin-right: auto;
width: 15vw;
border-radius: 25px;
color: whitesmoke;
&:hover{
    background-color: rgb(108, 125, 141,0.1);
}
`
export const Image = styled.img`
height: 40px;
width:40px;
border-radius: 50%;
object-fit: cover;
background: white;
margin-right: 10px;
`
export const NameContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
export const Name = styled.p`
font-size: 15px;
font-weight: bold;
margin: 0;
padding: 0;
`

export const Username = styled.p`
font-size: 15px;
font-weight: lighter;
margin: 0;
padding: 0;
`