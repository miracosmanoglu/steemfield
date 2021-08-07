import styled from "styled-components";

export const CoinCard = styled.div`
  display: flex;
  width: 285px;
  height: 120px;
  background: #1a2249;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 1100px) {
    width: 250px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 216px;
  height: 77.56px;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
  background-color: transparent;
  & img {
    object-fit: cover;
  }
`;

export const CoinDescription = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  background: #1a2249;
  padding: 0 34px;
  align-self: flex-end;
  margin-bottom: 7px;
  position: relative;
  @media only screen and (max-width: 1100px) {
    padding: 0 14px;
  }
`;

export const CoinName = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #ffffff;
`;

export const CoinValue = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #2bf2ff;
`;
