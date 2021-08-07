import React from "react";
import {
  ActivitiesContainer,
  Container,
  Item,
  IconWrap,
  Titles,
  Top,
  Bottom,
  SP,
  FilterContainer,
  SearchBar,
  FilterButton,
  OptionContainer,
  OptionTitle,
  Option,
} from "./styled";
import SearchBox from "../SearchBox/SearchBox";
import { IoWallet } from "react-icons/io5";
import { AiTwotoneHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { RiArrowGoForwardLine } from "react-icons/ri";
import { GoSettings } from "react-icons/go";

function Activities() {
  return (
    <ActivitiesContainer>
      <Container>
        <Item>
          <IconWrap>
            <IoWallet color="white" size={27} />
          </IconWrap>
          <Titles>
            <Top>
              Curation reward for <span>feeelsogood (dec-and-200320)</span>
            </Top>
            <Bottom>Mar 26, 2020</Bottom>
          </Titles>
          <SP>0.002 SP</SP>
        </Item>

        <Item>
          <IconWrap>
            <AiTwotoneHeart color="white" size={27} />
          </IconWrap>
          <Titles>
            <Top>
              Curation reward for <span>feeelsogood (dec-and-200320)</span>
            </Top>
            <Bottom>Mar 26, 2020</Bottom>
          </Titles>
          <SP>0.002 SP</SP>
        </Item>
        <Item>
          <IconWrap>
            <AiOutlineRetweet color="white" size={27} />
          </IconWrap>
          <Titles>
            <Top>
              Curation reward for <span>feeelsogood (dec-and-200320)</span>
            </Top>
            <Bottom>Mar 26, 2020</Bottom>
          </Titles>
          <SP>0.002 SP</SP>
        </Item>
        <Item>
          <IconWrap>
            <FaComment color="white" size={27} />
          </IconWrap>
          <Titles>
            <Top>
              Curation reward for <span>feeelsogood (dec-and-200320)</span>
            </Top>
            <Bottom>Mar 26, 2020</Bottom>
          </Titles>
          <SP>0.002 SP</SP>
        </Item>
        <Item>
          <IconWrap>
            <RiArrowGoForwardLine color="white" size={27} />
          </IconWrap>
          <Titles>
            <Top>
              Curation reward for <span>feeelsogood (dec-and-200320)</span>
            </Top>
            <Bottom>Mar 26, 2020</Bottom>
          </Titles>
          <SP>0.002 SP</SP>
        </Item>
      </Container>

      <FilterContainer>
        <SearchBar>
          <SearchBox />
        </SearchBar>

        <FilterButton>
          <GoSettings color="#2AF2FF" size={20} />
          <span>FILTERS</span>
        </FilterButton>
        <OptionContainer>
          <OptionTitle>GENERAL</OptionTitle>
          <Option>
            <input type="checkbox" />
            <span></span>
            Votes
          </Option>
          <Option>
            <input type="checkbox" />
            <span></span>
            Comments
          </Option>
          <Option>
            <input type="checkbox" />
            <span></span>
            Reples
          </Option>
          <Option>
            <input type="checkbox" />
            <span></span>
            Show Others
          </Option>
        </OptionContainer>
        <OptionContainer>
          <OptionTitle>REWARDS</OptionTitle>
          <Option>
            <input type="checkbox" />
            <span></span>
            Author Rewards
          </Option>
          <Option>
            <input type="checkbox" />
            <span></span>
            Curation Rewards
          </Option>
          <Option>
            <input type="checkbox" />
            <span></span>
            Benefactor Rewards
          </Option>
        </OptionContainer>
      </FilterContainer>
    </ActivitiesContainer>
  );
}

export default Activities;
