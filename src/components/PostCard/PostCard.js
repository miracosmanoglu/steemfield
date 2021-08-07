import React from "react";
import {
  PostCard as Container,
  ImageWrapper,
  PostCardContent,
  ContentHeader,
  UserImage,
  UserName,
  ContentHeaderLeft,
  ContentHeaderRight,
  Info,
  InfoText,
  Stats,
  StatsText,
  ContentDesc,
  DescHeader,
  DescText,
  LeftSection,
  IconWrapper,
  RightSection,
  IconSaveWrapper,
} from "./styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiTime } from "react-icons/bi";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaHeartBroken, FaComment, FaHashtag } from "react-icons/fa";
import { RiArrowGoForwardLine } from "react-icons/ri";
import { FiRepeat } from "react-icons/fi";
import ExchangeIcon from "../../icons/exchange.svg";
import SaveIcon from "../../icons/saveicon.svg";
function PostCard({ hasImage = true }) {
  return (
    <Container hasImage={hasImage}>
      {hasImage && (
        <ImageWrapper>
          <LazyLoadImage
            alt="User"
            height="100%"
            effect="opacity"
            src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618619242/d736a5e43f14ee35df2de3d699f00aa1_ymfhub.jpg"
            width="100%"
          />
        </ImageWrapper>
      )}
      <PostCardContent hasImage={hasImage}>
        <ContentHeader>
          <ContentHeaderLeft>
            <UserImage>
              <LazyLoadImage
                alt="User"
                height="100%"
                effect="opacity"
                src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618619242/d736a5e43f14ee35df2de3d699f00aa1_ymfhub.jpg"
                width="100%"
              />
            </UserImage>
            <UserName>max-promax-promax-pro</UserName>
            <LeftSection>
              <Info>
                <BiTime color="#FFFFFF" size="17" />
                <InfoText>1 hour ago</InfoText>
              </Info>
              <Info>
                <FaHashtag color="#7248E7" size="17" />
                <InfoText>randomlongtext</InfoText>
              </Info>
            </LeftSection>
          </ContentHeaderLeft>
          <ContentHeaderRight>
            <RightSection>
              <Stats>
                <AiTwotoneHeart color="#FF0045" size="17" />
                <StatsText normal>22</StatsText>
              </Stats>
              <Stats>
                <FaHeartBroken color="#ffffff" size="17" />
                <StatsText normal>22</StatsText>
              </Stats>
              <Stats>
                <FiRepeat color="#ffffff" size="17" />
                <StatsText normal>22</StatsText>
              </Stats>
            </RightSection>
            <RightSection>
              <Stats>
                <IconWrapper>
                  <img src={ExchangeIcon} alt="Exchange Icon" />
                </IconWrapper>
                <StatsText>107.88</StatsText>
              </Stats>
              <Stats>
                <FaComment color="#ffffff" size="17" />
                <StatsText>124</StatsText>
              </Stats>
              <Stats>
                <RiArrowGoForwardLine color="#ffffff" size="17" />
              </Stats>
              <IconSaveWrapper>
                <img src={SaveIcon} alt="Exchange Icon" />
              </IconSaveWrapper>
            </RightSection>
          </ContentHeaderRight>
        </ContentHeader>
        <ContentDesc>
          <DescHeader>STEEMFIELD - A GUIDE FOR NEWCOMERS</DescHeader>
          <DescText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            diam leo purus imperdiet. In volutpat lacus curabitur non netus
            malesuada. Interdum cursussa Fermentum diam leo purus imperdiet. In
            volutpat lacus curabitur non netus malesuada. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Fermentum diam leo purus
            imperdiet. In volutpat lacus curabitur non netus malesuada. Interdum
            cursussa Fermentum diam leo purus imperdiet. In volutpat lacus
            curabitur non netus malesuada. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Fermentum diam leo purus imperdiet. In
            volutpat lacus curabitur non netus malesuada. Interdum cursussa
            Fermentum diam leo purus imperdiet. In volutpat lacus curabitur non
            netus malesuada.
          </DescText>
        </ContentDesc>
      </PostCardContent>
    </Container>
  );
}

export default PostCard;
