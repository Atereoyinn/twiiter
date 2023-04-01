import styled from "styled-components";

export const TrendContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  flex: 0.3;
  display: flex;
  flex-direction: column;
`;

export const TrendInputContainer = styled.div`
  width: 80%;
  height: 40px;
  padding: 20px;
  margin: 20px 0 0 0;
`;
export const TrendInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  padding-left: 25px;
  border: none;
  border-radius: 25px;
  background: var(--trend-theme-color);
  &::placeholder{
    color:darkgrey;
    padding-left:10px;
   font-weight:bold
  }
`;
export const TrendTableContainer = styled.div`
  width: 80%;
  padding: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 15px;
  background: var(--trend-theme-color);
  opacity: 0.7;
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
`;
export const Trend = styled.div`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;
