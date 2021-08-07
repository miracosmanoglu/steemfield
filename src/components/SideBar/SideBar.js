import React, { useState } from "react";
import {
  Wrapper,
  IconWrap,
  Title,
  Search,
  ImageWrapper,
  UsersWrap,
  UserWrap,
} from "./styled";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import SearchBox from "../SearchBox/SearchBox";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SideBar() {
  const [open, setOpen] = useState(false);
  const usersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <Wrapper open={open}>
      <IconWrap open={open}>
        {open ? (
          <IoChevronBackOutline
            onClick={() => setOpen(!open)}
            size="40"
            color="#FFFFFF"
          />
        ) : (
          <IoChevronForwardOutline
            onClick={() => setOpen(!open)}
            size="40"
            color="#FFFFFF"
          />
        )}
      </IconWrap>
      {open ? (
        <>
          <Title>Following</Title>
          <Search>
            <SearchBox />
          </Search>

          <UsersWrap>
            {usersArray.map((user, index) => (
              <UserWrap key={index}>
                <ImageWrapper>
                  <LazyLoadImage
                    alt="User"
                    height="100%"
                    effect="opacity"
                    src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1618619242/d736a5e43f14ee35df2de3d699f00aa1_ymfhub.jpg"
                    width="100%"
                  />
                </ImageWrapper>
                <span>Tonguç Akademi</span>
              </UserWrap>
            ))}
          </UsersWrap>
        </>
      ) : null}
    </Wrapper>
  );
}

export default SideBar;
