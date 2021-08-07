import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
  height: fit-content;
  width: 100%;
  @media only screen and (max-width: 500px) {
    padding-left: 30px;
  }
`;

export const PostSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  & > div:first-child {
    margin-top: 10px;
  }
  @media only screen and (max-width: 500px) {
    padding: 0 5px 0 15px;
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;

export const FilterButtons = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 5px;
  padding-left: 10px;
  @media only screen and (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;

export const FilterButtonsItem = styled.li`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin-right: 60px;
  margin-top: 25px;

  @media only screen and (max-width: 1100px) {
    margin-right: 10px;
    margin-top: 25px;
  }
`;

export const FilterButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-decoration-line: ${(props) => (props.active ? "underline" : "none")};
  color: ${(props) => (props.active ? "#ffffff" : "#4F4F4F")};
  background: transparent;
  border: none;
  @media only screen and (max-width: 1100px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const Notifications = styled.div`
  display: flex;
  margin-top: 30px;
  padding-left: 30px;
  @media only screen and (max-width: 800px) {
    padding-left: 5px;
  }
`;

export const NotificationsCard = styled.div`
  display: flex;
  flex-direction: column;

  & div:last-child {
    margin-bottom: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 542px;
  height: 400px;
  margin-left: 250px;
  & img {
    object-fit: cover;
  }

  @media only screen and (max-width: 1500px) {
    margin-left: 150px;
  }

  @media only screen and (max-width: 1250px) {
    display: none;
  }
`;
