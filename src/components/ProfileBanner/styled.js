import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 0 30px;

  @media only screen and (max-width: 840px) {
    padding: 0 5px 0 15px;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 260px;

  & img {
    object-fit: cover;
  }
  @media only screen and (max-width: 1220px) {
    height: 200px;
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  padding: 25px 0 25px 260px;
  position: relative;
  @media only screen and (max-width: 1220px) {
    padding: 15px 0 15px 0;
  }
`;

export const UserImage = styled.div`
  display: flex;
  position: absolute;
  left: 60px;
  top: -35px;
  width: 185px;
  height: 185px;
  border-radius: 185px;
  padding: 8px;
  background: #ccd2e3;
  box-shadow: 0px 30px 25px rgba(0, 0, 0, 0.25);
  & img {
    object-fit: cover;
    border-radius: 185px;
  }
  @media only screen and (max-width: 1220px) {
    width: 65px;
    height: 65px;
    padding: 4px;
    left: 10px;
    top: -25px;
  }
`;

export const ProfileInfosTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: fit-content;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProfileInfosBottom = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: fit-content;

  & div:last-child {
    margin-right: 0;
    border: none;
  }
  @media only screen and (max-width: 680px) {
    flex-direction: column;
    align-items: flex-start;
    & div:last-child {
      margin-right: 0;
      border-left: 2px solid #2af2ff;
    }
  }
`;

export const UserName = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 43px;
  color: #ffffff;
  margin-right: 15px;

  & > span {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }
  @media only screen and (max-width: 1220px) {
    font-size: 20px;
    line-height: 28px;
    margin-right: 25px;
    padding-left: 85px;
  }
  @media only screen and (max-width: 500px) {
    margin-right: 0px;
    font-size: 16px;
  }
`;

export const UserElips = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 43px;
  border: 2px solid #2af2ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  @media only screen and (max-width: 1220px) {
    display: none;
  }
`;

export const Times = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  margin-right: 40px;

  & img {
    width: 26px;
    height: 26px;
  }

  & span {
    display: flex;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding-top: 2px;
    color: #ffffff;
    margin-left: 15px;
  }
  @media only screen and (max-width: 1220px) {
    margin-right: 15px;

    & img {
      width: 20px;
      height: 20px;
    }

    & span {
      font-size: 14px;
      line-height: 18px;
    }
  }

  @media only screen and (max-width: 720px) {
    margin-top: 10px;
  }
`;

export const InfoText = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  padding-right: 15px;
  margin-right: 15px;
  margin-top: 30px;
  border-right: 2px solid #2af2ff;

  @media only screen and (max-width: 1220px) {
    font-size: 16px;
    line-height: 18px;
    margin-right: 10px;
    padding-right: 10px;
  }

  @media only screen and (max-width: 720px) {
    margin-top: 10px;
  }

  @media only screen and (max-width: 680px) {
    margin-top: 10px;
    border-right: 0;
    padding-right: 0px;
    padding-left: 23px;
    margin-left: 10px;
    height: 25px;
    font-size: 14px;
    line-height: 18px;
    border-left: 2px solid #2af2ff;
  }
`;
