import styled from "styled-components";

export const TrendContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 0.3;
  display: flex;
  flex-direction: column;
  color: whitesmoke;
`;

export const TrendInputContainer = styled.div`
  position: relative;
  width: 80%;
  height: 30px;
  padding: 30px 0px 30px 15px;
  margin: 20px 0 0 0;
`;
export const TrendInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  padding-left: 25px;
  background: rgb(57, 56, 60, 0.8);
  border: none;
  border-radius: 25px;
  color: whitesmoke;
`;
export const TrendTableContainer = styled.div`
  width: 80%;
  padding: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 15px;
  background: rgb(57, 56, 60, 0.8);
`;
export const TrendDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 5px;
  &:hover{
    background-color: rgb(108, 125, 141,0.1);
    border-radius: 10px;
}
`;
export const TrendDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TrendDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Category = styled.h5`
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: 100;
  color: darkgray;
`;
export const Trend = styled.div`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;
