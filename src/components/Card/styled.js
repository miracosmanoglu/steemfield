import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 395px;
  height: 395px;
  border-radius: 20px;
  background-color: #30385a;
  position: relative;

  @media only screen and (max-width: 1100px) {
    padding-left: 20px;
    width: 320px;
    height: 320px;
  }
`;

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  z-index: 2;
  left: 0;
  width: 100%;
  height: 180px;
  border-radius: 20px;
  background: linear-gradient(
    0deg,
    rgba(26, 34, 73, 0.9) 0%,
    rgba(74, 81, 174, 0.315) 100%
  );
  padding: 11px 12px;
  padding-bottom: 19px;
  @media only screen and (max-width: 1100px) {
    height: 150px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  margin-right: 9px;
  background-color: transparent;
  & img {
    object-fit: cover;
    width: 21px;
    height: 21px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  & > h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }

  & span {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #ccd2e3;
  }

  & svg {
    margin-right: 9px;
  }

  @media only screen and (max-width: 1100px) {
    & > h1 {
      font-size: 14px;
      line-height: 20px;
      width: 105px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    & span {
      font-size: 12px;
      line-height: 14px;
    }
  }
`;

export const UserImage = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 100%;
  margin-right: 10px;
  & img {
    object-fit: cover;
    border-radius: 100%;
  }

  @media only screen and (max-width: 1100px) {
    width: 40px;
    height: 40px;
  }
`;

export const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 12px;

  @media only screen and (max-width: 1100px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
  & svg {
    margin-right: 4px;
  }
  & svg:last-child {
    margin-right: unset;
  }

  & > div {
    margin-right: 16px;
    display: flex;
    align-items: center;
  }
  & > div:last-child {
    margin-right: unset;
  }

  & span {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }

  @media only screen and (max-width: 1100px) {
    & span {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #30385a;
  & img {
    object-fit: cover;
    border-radius: 20px;
  }
`;
