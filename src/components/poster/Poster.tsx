import React from "react";
import {
  ButtonsContainer,
  StyledPoster,
  Subtitle,
  Title,
  TitlesContainer,
} from "./Poster.styles";
import Container from "../container/Container";
import CustomLink from "../custom-link/CustomLink";

const Poster = () => (
  <StyledPoster>
    <Container>
      <TitlesContainer>
        <Title> Twenty One Pilots </Title>
        <Subtitle>
          <time>22.02.23 в 21:00</time>
        </Subtitle>
      </TitlesContainer>
      <ButtonsContainer>
        <button type="button">{"<"}</button>
        <CustomLink inverted to="#">
          Купить билет
        </CustomLink>
        <button type="button">{">"}</button>
      </ButtonsContainer>
    </Container>
  </StyledPoster>
);

export default Poster;
