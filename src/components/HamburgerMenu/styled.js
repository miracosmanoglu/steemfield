import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 298px;
  background: #121836;
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  z-index: 10;
  ${(props) =>
    !props.open
      ? css`
          transform: translateX(360px);
        `
      : css`
          transform: translateX(55px);
          @media only screen and (max-width: 1350px) {
            transform: translateX(20px);
          }
        `}
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  & > div {
    margin-bottom: 64px;
  }
  & > div:first-child {
    margin: 25px 15px;
    align-self: flex-end;
  }
  & > div:last-child {
    margin-bottom: 45px;
  }
`;

export const IconWrap = styled.div`
  cursor: pointer;
  &:active {
    transform: scale(0.95);
    transition: 0.1s;
  }
`;

export const Container = styled.div`
  & > div:first-child {
    border-top: 0.5px solid #7248e7;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #7248e7;
  padding: 11px 0 11px 12px;
  cursor: pointer;
  & > a {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
  }
  & > svg {
    margin-left: 15px;
  }
`;
