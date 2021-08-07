import React, { useState } from "react";
import {
  HomePosts as Container,
  FilterButtons,
  FilterButtonsItem,
  FilterButton,
  PostCards,
} from "./styled";
import PostCard from "../PostCard/PostCard";
function HomePosts() {
  const [filter, setFilter] = useState("new");
  const PostMapper = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container>
      <FilterButtons>
        <FilterButtonsItem>
          <FilterButton
            active={filter === "new" ? true : false}
            onClick={() => setFilter("new")}
          >
            New
          </FilterButton>
        </FilterButtonsItem>
        <FilterButtonsItem>
          <FilterButton
            active={filter === "trend" ? true : false}
            onClick={() => setFilter("trend")}
          >
            Trending
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
        <FilterButtonsItem>
          <FilterButton
            active={filter === "muted" ? true : false}
            onClick={() => setFilter("muted")}
          >
            Muted
          </FilterButton>
        </FilterButtonsItem>
      </FilterButtons>
      <PostCards>
        {PostMapper.map((postMap, index) => (
          <PostCard key={index} />
        ))}
      </PostCards>
    </Container>
  );
}

export default HomePosts;
