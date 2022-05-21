import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import {
  StyledHeader,
  StyledLogo,
  Nav,
  LinksContainer,
  StyledLink,
} from "./Headet.styles";

const Header = () => (
  <StyledHeader>
    <Container>
      <Nav>
        <Link to="/">
          <StyledLogo />
        </Link>
        <LinksContainer>
          <StyledLink to="/version">Версия для слабовидящих</StyledLink>
          <StyledLink to="/profile">Мой профиль</StyledLink>
        </LinksContainer>
      </Nav>
    </Container>
  </StyledHeader>
);

export default Header;
