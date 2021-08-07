import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  margin-top: 30px;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  @media only screen and (max-width: 1100px) {
    margin-top: 0px;
  }
  @media only screen and (max-width: 840px) {
    padding: 0 5px 0 15px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 56px;
  padding: 5px;
  background: #ffffff;
  border: 2px solid #7248e7;
  border-radius: 30px;
  @media only screen and (max-width: 1100px) {
    margin-top: 20px;
  }
  @media only screen and (max-width: 840px) {
    flex-direction: column;
    height: fit-content;
    width: 100%;
  }
`;

export const TabsItem = styled.button`
  display: flex;
  align-items: center;
  height: 42px;
  cursor: pointer;
  padding: 0 36px;
  background: ${(props) => (props.active ? "#7248E7" : "#ffffff")};
  border: 2px solid ${(props) => (props.active ? "#7248E7" : "#ffffff")};
  border-radius: 30px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => (props.active ? "#ffffff" : "#121836")};
  @media only screen and (max-width: 1440px) {
    padding: 0 20px;
    font-size: 16px;
  }

  @media only screen and (max-width: 840px) {
    width: 100%;
    justify-content: center;
    font-size: 14px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;

  & button {
    background: transparent;
    display: flex;
    align-items: center;
    margin-left: 40px;
    & img {
      width: 55px;
      height: 55px;
      margin-right: 10px;
    }

    & span {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-decoration-line: underline;
      color: #ffffff;
    }
  }
  @media only screen and (max-width: 1440px) {
    & button {
      margin-left: 0px;
      margin-right: 20px;
      & img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }

      & span {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    & button {
      & img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
      }
    }
  }
`;
