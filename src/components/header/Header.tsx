import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import CustomLink from "../custom-link/CustomLink";
import { StyledHeader, StyledLogo, Nav, LinksContainer } from "./Headet.styles";

const Header = () => (
  <StyledHeader>
    <Container>
      <Nav>
        <Link to="/">
          <StyledLogo />
        </Link>
        <LinksContainer>
          <CustomLink inverted to="/#">
            Версия для слабовидящих
          </CustomLink>
          <CustomLink inverted to="/#">
            Мой профиль
          </CustomLink>
        </LinksContainer>
      </Nav>
    </Container>
  </StyledHeader>
);

export default Header;
