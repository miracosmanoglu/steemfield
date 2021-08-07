import styled from "styled-components";

export const BannerBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 368px;
  margin-top: 80px;
  @media only screen and (max-width: 1700px) {
    height: 285px;
    margin-top: 40px;
  }
  @media only screen and (max-width: 1390px) {
    margin-top: 40px;
    height: 268px;
    margin-bottom: 40px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  & img {
    object-fit: cover;
  }
`;

export const BoxInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const BoxInnerHeader = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 30px;
  @media only screen and (max-width: 1700px) {
    font-size: 26px;
    line-height: 26px;
  }
`;

export const BoxInnerDesc = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  width: 260px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 60px;
  @media only screen and (max-width: 1700px) {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 30px;
  }
`;

export const BoxInnerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 47px;
  background: #ef943b;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  @media only screen and (max-width: 1700px) {
    font-size: 26px;
    line-height: 26px;
  }
`;
