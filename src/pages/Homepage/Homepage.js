import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import CoinCard from "../../components/CoinCard/CoinCard";
import PostBoard from "../../components/PostBoard/PostBoard";
import BannerBox from "../../components/BannerBox/BannerBox";
import HomePosts from "../../components/HomePosts/HomePosts";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  SwiperContainer,
  CoinHeader,
  SwiperContainerCoin,
  CoinHeaderWrapper,
  CoinHeaderButton,
  PostWrapper,
  PostWrapperLeft,
  PostWrapperRight,
} from "./styled";
function Homepage() {
  const MapCounter = [1, 2, 3, 4, 5, 6, 7, 8];
  const [spaceBetweens, setSpaceBetweens] = useState(50);
  useEffect(() => {
    if (window && window.innerWidth < 1100) {
      setSpaceBetweens(20);
    }
  }, []);
  return (
    <div>
      <Navbar />
      <SwiperContainer>
        <Swiper spaceBetween={spaceBetweens} slidesPerView="auto">
          {MapCounter.map((mapItem, index) => (
            <SwiperSlide key={index}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
      <CoinHeaderWrapper>
        <CoinHeader>Coin Marketplace</CoinHeader>
        <CoinHeaderButton>All</CoinHeaderButton>
      </CoinHeaderWrapper>
      <SwiperContainerCoin>
        <Swiper spaceBetween={spaceBetweens} slidesPerView="auto">
          {MapCounter.map((mapItem, index) => (
            <SwiperSlide key={index}>
              <CoinCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainerCoin>
      <PostWrapper>
        <PostWrapperLeft>
          <PostBoard />
          <BannerBox />
        </PostWrapperLeft>
        <PostWrapperRight>
          <HomePosts />
        </PostWrapperRight>
      </PostWrapper>
      <Footer />
    </div>
  );
}

export default Homepage;
