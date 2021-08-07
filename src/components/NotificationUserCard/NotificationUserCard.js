import React from "react";
import {
  Container,
  UserImage,
  Username,
  Event,
  Top,
  IconWrapper,
  Texts,
  Bottom,
  Alls,
} from "./styled";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

function NotificationUserCard() {
  return (
    <Container>
      <UserImage>
        <LazyLoadImage
          alt="User"
          height="100%"
          effect="opacity"
          src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618619242/d736a5e43f14ee35df2de3d699f00aa1_ymfhub.jpg"
          width="100%"
        />
      </UserImage>
      <Alls>
        <Top>
          <Username>@arcayart</Username>
          <Event>replied to your post</Event>
        </Top>
        <Bottom>
          <Texts>
            <IconWrapper>
              <AiTwotoneHeart color="#FF0045" size="17" />
            </IconWrapper>
            42 Minutes ago
          </Texts>
          <Texts>
            <IconWrapper>
              <FaComment color="#ffffff" size="17" />
            </IconWrapper>
            48
          </Texts>
        </Bottom>
      </Alls>
    </Container>
  );
}

export default NotificationUserCard;
