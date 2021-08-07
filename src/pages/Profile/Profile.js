import React, { useState } from "react";
import {
  ProfileWrapper,
  PostSection,
  PostWrapper,
  FilterButtons,
  FilterButtonsItem,
  FilterButton,
  Notifications,
  NotificationsCard,
  ImageWrapper,
} from "./styled";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Communities from "../../components/Communities/Communities";
import Activities from "../../components/Activities/Activities";

import NotificationUserCard from "../../components/NotificationUserCard/NotificationUserCard";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import ProfileTabs from "../../components/ProfileTabs/ProfileTabs";
import PostCard from "../../components/PostCard/PostCard";
import SideBar from "../../components/SideBar/SideBar";
import Star from "../../icons/star.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Profile() {
  const Mapper = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const MapperTwo = [1, 2];
  const MapperThree = [1, 2, 3, 4];
  const [section, setSection] = useState(1);
  const [filter, setFilter] = useState("new");
  const cData = [
    { title: "Steemfield-BRU (BY-RU-UA)", position: "MOD", tag: "Alumni" },
    { title: "WORLD OF XPILAR", position: "GUEST" },
    { title: "SteemfieldFoods", position: "GUEST" },
    { title: "Whalpower", position: "GUEST", tag: "Starmember", icon: Star },
    { title: "Steemfield-BRU (BY-RU-UA)", position: "MOD", tag: "Alumni" },
    { title: "WORLD OF XPILAR", position: "GUEST" },
    { title: "SteemfieldFoods", position: "GUEST" },
    { title: "Whalpower", position: "GUEST", tag: "Starmember", icon: Star },
  ];
  return (
    <ProfileWrapper>
      <Navbar />
      <SideBar />
      <ProfileBanner />
      <ProfileTabs setSection={setSection} />
      <PostSection>
        {section === 1 &&
          Mapper.map((mapItem, index) => (
            <PostWrapper key={index}>
              <PostCard />
            </PostWrapper>
          ))}
        {section === 2 && (
          <>
            <FilterButtons>
              <FilterButtonsItem>
                <FilterButton
                  active={filter === "new" ? true : false}
                  onClick={() => setFilter("new")}
                >
                  Posts
                </FilterButton>
              </FilterButtonsItem>
              <FilterButtonsItem>
                <FilterButton
                  active={filter === "trend" ? true : false}
                  onClick={() => setFilter("trend")}
                >
                  Comments
                </FilterButton>
              </FilterButtonsItem>
              <FilterButtonsItem>
                <FilterButton
                  active={filter === "payout" ? true : false}
                  onClick={() => setFilter("payout")}
                >
                  Payouts
                </FilterButton>
              </FilterButtonsItem>
            </FilterButtons>
            {MapperTwo.map((mapItem, index) => (
              <PostWrapper key={index}>
                <PostCard />
              </PostWrapper>
            ))}
          </>
        )}
        {section === 3 &&
          MapperThree.map((mapItem, index) => (
            <PostWrapper key={index}>
              <PostCard hasImage={index === 0 ? true : false} />
            </PostWrapper>
          ))}
        {section === 4 && <Communities data={cData} />}
        {section === 5 && (
          <>
            <FilterButtons>
              <FilterButtonsItem>
                <FilterButton
                  active={filter === "new" ? true : false}
                  onClick={() => setFilter("new")}
                >
                  All
                </FilterButton>
              </FilterButtonsItem>
              <FilterButtonsItem>
                <FilterButton
                  active={filter === "trend" ? true : false}
                  onClick={() => setFilter("trend")}
                >
                  Replies
                </FilterButton>
              </FilterButtonsItem>
              <FilterButtonsItem>
                <FilterButton
                  active={filter === "payout" ? true : false}
                  onClick={() => setFilter("payout")}
                >
                  Metions
                </FilterButton>
              </FilterButtonsItem>
              <FilterButtonsItem>
                <FilterButton
                  active={filter === "Follows" ? true : false}
                  onClick={() => setFilter("Follows")}
                >
                  Follows
                </FilterButton>
              </FilterButtonsItem>
              <FilterButtonsItem>
                <FilterButton
                  active={filter === "Upvotes" ? true : false}
                  onClick={() => setFilter("Upvotes")}
                >
                  Upvotes
                </FilterButton>
              </FilterButtonsItem>
              <FilterButtonsItem>
                <FilterButton
                  active={filter === "Resteems" ? true : false}
                  onClick={() => setFilter("Resteems")}
                >
                  Resteems
                </FilterButton>
              </FilterButtonsItem>
            </FilterButtons>
            <Notifications>
              <NotificationsCard>
                {MapperThree.map((mapItem, index) => (
                  <NotificationUserCard key={index} />
                ))}
              </NotificationsCard>
              <ImageWrapper>
                <LazyLoadImage
                  alt="User"
                  height="100%"
                  effect="opacity"
                  src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1619143807/66149_Converted_4_zonmxg.png"
                  width="100%"
                />
              </ImageWrapper>
            </Notifications>
          </>
        )}
        {section === 6 && <Activities />}
      </PostSection>
      <Footer />
    </ProfileWrapper>
  );
}

export default Profile;
