import styled from "styled-components";

export const ActivitiesContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 75px !important;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    flex-flow: column-reverse;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-top: 20px;
  flex-direction: column;
  max-width: 1001px;
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 1px solid #2af2ff;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 19px;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
`;

export const IconWrap = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100%;
  margin-right: 15px;
  cursor: pointer;
  background-color: #7248e7;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    margin-bottom: 10px;
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
  & > span {
    color: #2af2ff;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 14px;
  }
`;

export const Bottom = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #ffffff;
  @media only screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;

export const SP = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  margin-left: auto;
  @media only screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 39px 33px 33px 41px;
  width: 320px;
  height: 749px;
  background: #1a2249;
  margin-left: 63px;
  @media only screen and (max-width: 800px) {
    margin-left: unset;
    height: unset;
  }
  @media only screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const SearchBar = styled.div`
  width: 246px;
  @media only screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const FilterButton = styled.button`
  width: 141px;
  padding: 6px 10px;
  background: #7248e7;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-top: 46px;
  & > span {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
    margin-left: 15px;
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  & span {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    color: #ffffff;
  }
`;

export const OptionTitle = styled.span`
  margin-bottom: 27px;
  margin-top: 36px;
`;

export const Option = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: #ffffff;
  display: block;
  align-items: center;
  margin-bottom: 41px;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: block;
  position: relative;
  padding-left: 31px;
  margin-bottom: 12px;
  white-space: nowrap;
  line-height: 20px;
  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  & > span {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: 2.33px solid #7248e7;
    border-radius: 5px;
  }

  &:hover input ~ span {
    background-color: #7248e752;
  }
  & input:checked ~ span {
    background-color: transparent;
  }
  & span:after {
    content: "";
    position: absolute;
    display: none;
  }
  & input:checked ~ span:after {
    display: block;
  }
  & span:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid #7248e7;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
