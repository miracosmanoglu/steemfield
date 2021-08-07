import React from "react";
import {
  BannerContainer,
  BannerWrapper,
  ProfileInfos,
  ProfileInfosTop,
  UserImage,
  UserName,
  UserElips,
  Times,
  ProfileInfosBottom,
  InfoText,
} from "./styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CalendarIcon from "../../icons/calendaricon.svg";

function ProfileBanner() {
  return (
    <BannerContainer>
      <BannerWrapper>
        <LazyLoadImage
          alt="User Banner"
          height="100%"
          effect="opacity"
          src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618847999/web-design-concept-with-drawings_1_mhpj7v.png"
          width="100%"
        />
      </BannerWrapper>
      <ProfileInfos>
        <UserImage>
          <LazyLoadImage
            alt="User"
            height="100%"
            effect="opacity"
            src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618619242/d736a5e43f14ee35df2de3d699f00aa1_ymfhub.jpg"
            width="100%"
          />
        </UserImage>
        <ProfileInfosTop>
          <UserName>
            Pelin <span>Özkan</span>
          </UserName>
          <UserElips>(124)</UserElips>
          <Times>
            <img src={CalendarIcon} alt="Calendar Icon" />
            <span>Joined May 2017</span>
          </Times>
          <Times>
            <img src={CalendarIcon} alt="Calendar Icon" />
            <span>Active 4 hours ago</span>
          </Times>
        </ProfileInfosTop>
        <ProfileInfosBottom>
          <InfoText>1770 Followers</InfoText>
          <InfoText>8214 Posts</InfoText>
          <InfoText>1472 Following</InfoText>
          <InfoText>11,069 SP</InfoText>
          <InfoText>#504</InfoText>
        </ProfileInfosBottom>
      </ProfileInfos>
    </BannerContainer>
  );
}

export default ProfileBanner;
