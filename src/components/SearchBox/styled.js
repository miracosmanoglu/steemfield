import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  height: 35px;
  width: 100%;
  color: white;
  background: transparent;
  position: relative;
`;

export const SearchBarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 16px;
  width: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;

export const SearchBarInput = styled.input`
  background: transparent;
  width: 100%;
  height: 35px;
  outline: none;
  border: none;
  padding-right: 20px;
  border-bottom: 2px solid #7248e7;
  color: #ccd2e3;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.05em;
  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.05em;
    color: #ccd2e3;
  }
`;
