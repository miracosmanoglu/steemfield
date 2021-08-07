import React from "react";
import { Wrapper, IconWrap, Container, Item } from "./styled";
import { RiCloseCircleFill } from "react-icons/ri";
import { BiExport } from "react-icons/bi";
function HamburgerMenu({ open, setOpen }) {
  return (
    <Wrapper open={open}>
      <IconWrap onClick={() => setOpen(false)}>
        <RiCloseCircleFill color="#7248E7" size={35} />
      </IconWrap>
      <Container>
        <Item>
          <a href="/">Welcome</a>
        </Item>
        <Item>
          <a href="/">FAQ</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
        <Item>
          <a href="/">Stolen Accounts Recovery</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
        <Item>
          <a href="/">Change Account Password</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
        <Item>
          <a href="/">Vote for Witness</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
        <Item>
          <a href="/">Steem Proposals</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
        <Item>
          <a href="/">Steem Proposals</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
      </Container>
      <Container>
        <Item>
          <a href="/">Third-party exchanges:</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
        <Item>
          <a href="/">Poloniex</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
      </Container>
      <Container>
        <Item>
          <a href="/">Advertise</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
        <Item>
          <a href="/">Jobs at Steemit</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
      </Container>
      <Container>
        <Item>
          <a href="/">Developer Portal</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
        <Item>
          <a href="/">Steem Bluepaper</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
        <Item>
          <a href="/">SMT Whitepaper</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
        <Item>
          <a href="/">Steem Whitepaper</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
      </Container>
      <Container>
        <Item>
          <a href="/">Privacy Policy</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
        <Item>
          <a href="/">Terms of Service</a>
          <BiExport size={20} color="#2AF2FF" />
        </Item>
      </Container>
    </Wrapper>
  );
}

export default HamburgerMenu;
