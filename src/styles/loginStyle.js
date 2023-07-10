import styled from "styled-components";


export const LoginContainer = styled.div`
height:"100%";
display:flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;
padding: 30px;
margin: 20px;
`
export const Logo = styled.div`
display:flex;
align-items: center;
justify-content: center;
`
export const TextContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
`
export const Txt = styled.h1`
font-size: 25px;
font-weight: 600
`

export const LoginButtonContainer = styled.div`
width: 30vw;
padding: 15px;
margin: 10px
`
export const LoginBtn = styled.button`
width: 100%;
border-radius:25px;
border: 1px solid lightgray;
padding: 10px;
font-size:15px;
font-weight:700
`
export const LoginBtnText = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const LoginInputCont = styled.div`
width: 30vw;
height:35px;
padding: 15px;
margin: 10px
`
export const InputLogin = styled.input`
width: 100%;
height:100%;
border: 1px solid lightgray;
&::placeholder{
    padding: 15px;
}
`
export const LineCont = styled.div`
width: 30vw;
display:flex;
align-items:center;
justify-content:center;
padding:15px;
margin: 15
`
export const P =styled.p`
padding:0px 5px;
`
export const HR = styled.hr`
font-weight:400;
color: lightgray;
flex: 2;
`
export const ParagraphLink = styled.div`
width: 30vw;
display: flex;
justify-content: center;
align-item: center;
padding: 15px;
font-size: 20px;
color: darkgray;
font-weight: 500;
`

export const LinkTag = styled.a`
text-decoration:none;
color: var(--secondary-color);
`