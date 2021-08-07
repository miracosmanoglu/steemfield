import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 95px;
  width: 100%;
  padding: 0 55px;
  @media only screen and (max-width: 1350px) {
    padding: 0 20px;
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 95px;
`;

export const NavbarLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95px;
`;

export const Logo = styled.h1`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.02em;
  color: #2bf2ff;
  user-select: none;
  cursor: pointer;

  & span {
    color: #7248e7;
    font-weight: 300;
  }

  @media only screen and (max-width: 800px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  height: 35px;
  width: 288px;
  background: transparent;
  @media only screen and (max-width: 1370px) {
    width: 208px;
  }
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 252px;
  height: 42px;
  border: 1px solid #7248e7;
  border-radius: 10px;
  margin: 0 60px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const AuthLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 0px;
  border: 1px solid #ccd2e3;
`;

export const AuthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.05em;
  width: 125px;
  height: 40px;
  color: ${(props) => props.color};
  background: transparent;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 42px;
  height: 21px;
  user-select: none;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    width: 32px;
    height: 21px;
  }
`;

export const MenuBarOne = styled.div`
  display: flex;
  border: 1.5px solid #ccd2e3;
  border-radius: 2px;
  width: 42px;
  height: 0px;
  background: #ccd2e3;
  align-self: flex-end;
  @media only screen and (max-width: 800px) {
    width: 32px;
  }
`;

export const MenuBarTwo = styled.div`
  display: flex;
  border: 1.5px solid #ccd2e3;
  border-radius: 2px;
  width: 30px;
  height: 0px;
  background: #ccd2e3;
  align-self: flex-end;
  @media only screen and (max-width: 800px) {
    width: 20px;
  }
`;

export const MenuBarThree = styled.div`
  display: flex;
  border: 1.5px solid #ccd2e3;
  border-radius: 2px;
  width: 18px;
  height: 0px;
  background: #ccd2e3;
  align-self: flex-end;
  @media only screen and (max-width: 800px) {
    width: 8px;
  }
`;
