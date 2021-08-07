import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-top: 20px;
`;

export const DivIcon = styled.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(180deg, #7248e7 0%, #2af2ff 100%);
  border-radius: 5px;
  margin-bottom: 3px;
  margin-left: 15px;
  margin-right: 15px;
  @media only screen and (max-width: 800px) {
    margin-left: 5px;
    margin-right: 10px;
    width: 14px;
    height: 14px;
  }
`;
export const CommunitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  list-style: none;
`;

export const CommunitiesListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  height: 35px;
  line-height: 18px;
  color: #ffffff;
  margin-bottom: 30px;

  & .wrapper-div {
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: #ffffff;
  }
  @media only screen and (max-width: 800px) {
    font-size: 13px;
    line-height: 13px;
    flex-direction: column;
    align-items: flex-start;
    height: fit-content;

    & .wrapper-div {
      font-size: 13px;
      line-height: 13px;
    }
  }
`;

export const Position = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 18px;
  color: #d1d1d1;
  padding-left: 5px;
  @media only screen and (max-width: 800px) {
    font-size: 13px;
    line-height: 13px;
    padding-top: 5px;
    padding-left: 29px;
  }
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  padding: 7.5px 20px;
  border: 1px solid #7248e7;
  margin-left: 15px;
  border-radius: 10px;
  height: 35px;
  @media only screen and (max-width: 800px) {
    font-size: 13px;
    line-height: 13px;
    height: 30px;
    margin-top: 10px;
    margin-left: 20px;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin-left: 5px;
  background-color: transparent;
  & img {
    width: 18px;
    height: 15px;
  }
`;
