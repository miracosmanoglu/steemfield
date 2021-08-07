import styled from "styled-components";

export const PostCard = styled.div`
  display: flex;
  width: 100%;
  height: 170px;
  align-items: center;
  padding: 0 25px 0 15px;
  justify-content: space-between;
  background: #121836;
  border-radius: 30px;
  margin: 10px 0;

  @media only screen and (max-width: 1700px) {
    height: 160px;
  }

  @media only screen and (max-width: 1160px) {
    margin-top: ${(props) => (props.hasImage ? "10px" : "0")};
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    padding: 15px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 157px;
  height: 140px;
  background-color: transparent;
  border-radius: 30px;
  & img {
    object-fit: cover;
    border-radius: 30px;
  }
  @media only screen and (max-width: 1700px) {
    width: 140px;
  }
  @media only screen and (max-width: 1430px) {
    width: 110px;
    height: 130px;
  }
  @media only screen and (max-width: 1160px) {
    width: 100%;
    height: 140px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: transparent;
  & img {
    object-fit: cover;
    width: 21px;
    height: 21px;
  }

  margin-right: 5px;
`;

export const IconSaveWrapper = styled.div`
  display: flex;
  width: auto;
  height: auto;
  background-color: transparent;

  margin-left: 40px;
  @media only screen and (max-width: 1750px) {
    margin-left: 15px;
    & img {
      width: 16px;
      padding-top: 2px;
      height: auto;
    }
  }

  @media only screen and (max-width: 1160px) {
    margin-left: 0px;
  }

  @media only screen and (max-width: 600px) {
    position: absolute;
    bottom: -25px;
    right: 0;

    & img {
      padding-top: 0px;
      width: 14px;
    }
  }
`;

export const PostCardContent = styled.div`
  display: flex;
  width: ${(props) =>
    props.hasImage === true ? "calc(100% - 157px)" : "100%"};
  height: 160px;
  flex-direction: column;
  padding-left: 30px;
  @media only screen and (max-width: 1700px) {
    width: ${(props) =>
      props.hasImage === true ? "calc(100% - 140px)" : "100%"};
    padding-left: 15px;
  }
  @media only screen and (max-width: 1430px) {
    width: ${(props) =>
      props.hasImage === true ? "calc(100% - 110px)" : "100%"};
  }
  @media only screen and (max-width: 1160px) {
    margin-top: ${(props) => (props.hasImage ? "10px" : "0px")};
    width: 100%;
    padding: 5px;
    height: fit-content;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  height: fit-content;
  margin: 15px 0;
  justify-content: space-between;
  @media only screen and (max-width: 1160px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 65px;
  }
`;

export const ContentHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContentHeaderRight = styled.div`
  display: flex;
  @media only screen and (max-width: 1160px) {
    margin-top: 10px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
    margin-top: 0px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  height: 22px;

  @media only screen and (max-width: 600px) {
    &:last-child {
      margin-top: 8px;
    }
  }
`;

export const LeftSection = styled.div`
  display: flex;
  height: 22px;

  @media only screen and (max-width: 600px) {
    position: absolute;
    bottom: -48px;
    left: 0;
    width: 170px;
    justify-content: space-between;
  }
`;

export const UserImage = styled.div`
  display: flex;
  width: 49px;
  height: 49px;
  background-color: transparent;
  border-radius: 49px;
  & img {
    object-fit: cover;
    border-radius: 49px;
  }

  @media only screen and (max-width: 1700px) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const UserName = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-left: 10px;
  color: #ffffff;
  @media only screen and (max-width: 1875px) {
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    line-height: 18px;
  }
  @media only screen and (max-width: 1700px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media only screen and (max-width: 1160px) {
    max-width: 130px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0px;
    max-width: 190px;
    position: absolute;
    top: 65px;
    white-space: nowrap;
  }
`;

export const Info = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: center;
  @media only screen and (max-width: 1700px) {
    margin-left: 35px;
  }
  @media only screen and (max-width: 1500px) {
    margin-left: 20px;
  }
  @media only screen and (max-width: 1160px) {
    margin-left: 15px;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0px;
    margin-right: 4px;
    margin-top: 3px;
  }
`;

export const InfoText = styled.span`
  display: block;
  margin-left: 4px;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media only screen and (max-width: 1700px) {
    font-size: 14px;
    line-height: 16px;
  }
  @media only screen and (max-width: 1160px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Stats = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  @media only screen and (max-width: 1700px) {
    margin-left: 15px;
  }

  @media only screen and (max-width: 1450px) {
    margin-left: 13px;
  }

  @media only screen and (max-width: 1160px) {
    margin-left: 0;
    margin-right: 13px;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 15px;
    margin-right: 0px;
    align-items: flex-end;
  }
`;

export const StatsText = styled.span`
  display: flex;
  margin-left: 4px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.normal ? "400" : "600")};
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  @media only screen and (max-width: 1700px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media only screen and (max-width: 1160px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const ContentDesc = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const DescHeader = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  @media only screen and (max-width: 1700px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media only screen and (max-width: 1160px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const DescText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 5px;
  height: 43px;
  width: 100%;
  overflow: hidden;
  @media only screen and (max-width: 1700px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media only screen and (max-width: 1160px) {
    font-size: 12px;
    line-height: 14px;
    height: 40px;
  }
`;
