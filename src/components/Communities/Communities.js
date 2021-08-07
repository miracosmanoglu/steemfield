import React from "react";
import {
  Container,
  CommunitiesList,
  CommunitiesListItem,
  Position,
  DivIcon,
  Tag,
  IconWrapper,
} from "./styled";

function Communities({ data }) {
  return (
    <Container>
      <CommunitiesList>
        {data.map((item, index) => (
          <CommunitiesListItem key={index}>
            <div className="wrapper-div">
              <DivIcon /> {item.title}
            </div>
            <Position>{item.position}</Position>
            {item.tag && (
              <Tag>
                {item.tag}{" "}
                {item.icon && (
                  <IconWrapper>
                    <img src={item.icon} alt="Exchange Icon" />
                  </IconWrapper>
                )}
              </Tag>
            )}
          </CommunitiesListItem>
        ))}
      </CommunitiesList>
    </Container>
  );
}

export default Communities;
