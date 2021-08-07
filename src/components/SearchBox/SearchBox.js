import React from "react";
import { SearchBarInput, SearchBarIcon, SearchBar } from "./styled";
import { AiOutlineSearch } from "react-icons/ai";
function SearchBox() {
  return (
    <SearchBar>
      <SearchBarInput placeholder="Search.."></SearchBarInput>
      <SearchBarIcon>
        <AiOutlineSearch color="#2BF2FF" size="16" />
      </SearchBarIcon>
    </SearchBar>
  );
}

export default SearchBox;
