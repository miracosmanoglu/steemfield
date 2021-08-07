import React from "react";
import {
  BannerBox as Container,
  ImageWrapper,
  BoxInner,
  BoxInnerHeader,
  BoxInnerDesc,
  BoxInnerButton,
} from "./styled";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BannerBox() {
  return (
    <Container>
      <ImageWrapper>
        <LazyLoadImage
          alt="Banner"
          height="100%"
          effect="opacity"
          src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618651651/Rectangle_62_pd1g8d.png"
          width="100%"
        />
      </ImageWrapper>
      <BoxInner>
        <BoxInnerHeader>JustSwap</BoxInnerHeader>
        <BoxInnerDesc>Instant exchange of any TRC-20 token</BoxInnerDesc>
        <BoxInnerButton>Go!</BoxInnerButton>
      </BoxInner>
    </Container>
  );
}

export default BannerBox;
