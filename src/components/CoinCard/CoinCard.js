import React from "react";
import {
  CoinCard as Container,
  ImageWrapper,
  CoinDescription,
  CoinName,
  CoinValue,
} from "./styled";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CoinCard() {
  return (
    <Container>
      <ImageWrapper>
        <LazyLoadImage
          alt="Coin Graph"
          height="100%"
          effect="opacity"
          src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618619494/coincardimg_poudmh.svg"
          width="100%"
        />
      </ImageWrapper>
      <CoinDescription>
        <CoinName>TRX</CoinName>
        <CoinValue>0.14</CoinValue>
      </CoinDescription>
    </Container>
  );
}

export default CoinCard;
