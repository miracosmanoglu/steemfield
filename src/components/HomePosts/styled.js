import styled from "styled-components";

export const HomePosts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const FilterButtons = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 30px;
`;

export const FilterButtonsItem = styled.li`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin-right: 60px;
  @media only screen and (max-width: 1100px) {
    margin-right: 15px;
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
    font-size: 16px;
    line-height: 20px;
  }
`;
export const PostCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;
