import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

export const UserImage = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 68px;
  margin-right: 15px;
  cursor: pointer;

  & img {
    object-fit: cover;
    border-radius: 68px;
  }
  @media only screen and (max-width: 800px) {
    width: 48px;
    height: 48px;
  }
`;

export const Username = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  color: #ffffff;
  margin-right: 20px;
  @media only screen and (max-width: 800px) {
    font-size: 12px;
    line-height: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 74px;
  }
`;

export const Event = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #2af2ff;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    font-size: 10px;
    line-height: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
`;

export const Alls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  margin-right: 8px;
  cursor: pointer;
`;

export const Texts = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  margin-right: 20px;
  margin-top: 15px;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
`;
