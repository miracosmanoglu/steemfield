import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  margin-left: 55px;
  margin-right: 55px;
  @media only screen and (max-width: 1400px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const CoinsRow = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #c2c1c1;
  border-bottom: 1px solid #c2c1c1;
  padding: 16px 0;
  justify-content: space-between;

  & > h3 {
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
    opacity: 0.7;
    line-height: 22px;
  }

  & > h3:active {
    transform: scale(0.95);
    transition: 0.1s;
  }

  & > h3:first-child {
    cursor: unset;
    padding: 0;
  }

  & > h3:first-child:active {
    transform: unset;
  }

  & > h3:last-child {
    padding: 0;
  }

  & > h3 > svg {
    margin-left: 9px;
  }

  @media only screen and (max-width: 1700px) {
    & > h3 {
      padding: 0 10px;
    }
  }
  @media only screen and (max-width: 1400px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 23px;
    & > h3 {
      padding: 0px;
      padding-bottom: 10px;
    }
    & > h3:first-child {
      padding-bottom: 20px;
    }
    & > h3:last-child {
      margin-left: auto;
    }
  }
  @media only screen and (max-width: 740px) {
    margin-top: 10px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  padding: 25px 39px;
  padding-bottom: 32px;
  justify-content: flex-end;
  & > h3 {
    user-select: none;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
    opacity: 0.7;
    margin-left: 54px;
  }

  & > h3:active {
    transform: scale(0.95);
    transition: 0.1s;
  }

  @media only screen and (max-width: 500px) {
    padding-left: 0px;
    padding-right: 0px;
    justify-content: space-evenly;
    & > h3 {
      margin: 0;
    }
  }

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    margin-left: 23px;
    & > h3 {
      margin-bottom: 10px;
    }
  }
`;
