import React from "react";
import {
  PostBoard as Container,
  Header,
  PostList,
  PostListItem,
} from "./styled";
function PostBoard() {
  return (
    <Container>
      <Header>ALL POSTS</Header>
      <PostList>
        <PostListItem firstChild>My Communities</PostListItem>
        <PostListItem>SteemfieldCryptoAcademy</PostListItem>
        <PostListItem>Steemfield Feedback</PostListItem>
        <PostListItem>SCT Crypto</PostListItem>
        <PostListItem>Amaze Creater Union</PostListItem>
        <PostListItem>zzan</PostListItem>
        <PostListItem>Korea</PostListItem>
      </PostList>
      <PostList>
        <PostListItem firstChild>Trending Communites</PostListItem>
        <PostListItem>SteemfieldCryptoAcademy</PostListItem>
        <PostListItem>Steemfield Feedback</PostListItem>
        <PostListItem>SCT Crypto</PostListItem>
        <PostListItem>Amaze Creater Union</PostListItem>
        <PostListItem>zzan</PostListItem>
        <PostListItem>Korea</PostListItem>
      </PostList>
      <PostList>
        <PostListItem firstChild>Explore communites..</PostListItem>
      </PostList>
    </Container>
  );
}

export default PostBoard;
