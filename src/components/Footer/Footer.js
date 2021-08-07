import React from "react";
import { Wrapper, CoinsRow, Bottom } from "./styled";
import { IoChevronForwardOutline } from "react-icons/io5";

function Footer() {
  return (
    <Wrapper>
      <CoinsRow>
        <h3>Digital currencis;</h3>
        <h3>VERTCOIN</h3>
        <h3>LITECOIN</h3>
        <h3>DIGIBYTE</h3>
        <h3>DECRET</h3>
        <h3>RAVENCOIN</h3>
        <h3>DEGECOIN</h3>
        <h3>BITCOIN</h3>
        <h3>
          All coins
          <IoChevronForwardOutline size="22" color="#FFFFFF" />
        </h3>
      </CoinsRow>
      <Bottom>
        <h3>Terms</h3>
        <h3>Privacy</h3>
        <h3>Compliances</h3>
      </Bottom>
    </Wrapper>
  );
}

export default Footer;
