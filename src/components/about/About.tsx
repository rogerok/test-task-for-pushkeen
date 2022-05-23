import React from "react";
import Container from "../container/Container";
import CustomLink from "../custom-link/CustomLink";
import Title from "../title/Title";
import {
  StyledAboutWrapper,
  Header,
  CardCollection,
  AboutPlace,
  AboutPlaceSubtitle,
  AboutPlaceText,
  AboutBand,
  AboutBandText,
} from "./About.styles";

const About = () => (
  <Container>
    <StyledAboutWrapper>
      <Header>
        <Title>
          <span>Купили билеты</span>
        </Title>
        <p>
          <span>932/</span>
          <span>1000</span>
        </p>
      </Header>
      <CardCollection>
        <li>
          <p>
            <span>Иванов Иван</span>
            <span>Санкт-Петербург</span>
          </p>
          <CustomLink isSmall inverted={false} to="/profile">
            Смотреть профиль
          </CustomLink>
        </li>
        <li>
          <p>
            <span>Иванов Иван</span>
            <span>Санкт-Петербург</span>
          </p>
          <CustomLink isSmall inverted={false} to="/profile">
            Смотреть профиль
          </CustomLink>
        </li>
        <li>
          <p>
            <span>Иванов Иван</span>
            <span>Санкт-Петербург</span>
          </p>
          <CustomLink isSmall inverted={false} to="/profile">
            Смотреть профиль
          </CustomLink>
        </li>
        <li>
          <p>
            <span>Иванов Иван</span>
            <span>Санкт-Петербург</span>
          </p>
          <CustomLink isSmall inverted={false} to="/profile">
            Смотреть профиль
          </CustomLink>
        </li>
      </CardCollection>
      <section>
        <AboutPlace>
          <div
            className=""
            style={{
              width: "33%",
            }}
          >
            <Title>О площадке</Title>
            <AboutPlaceSubtitle>
              Современная площадка для проведения концертов и других мероприятий
              любой сложности.
            </AboutPlaceSubtitle>
            <AboutPlaceText>
              Мы предоставляем всю необходимую для организаторов инфраструктуру
              и готовые решения под все основные задачи любого события, а также
              современное оборудование, соответствующее самым высоким мировым
              стандартам.
            </AboutPlaceText>
          </div>

          <textarea
            style={{
              width: "55%",
              resize: "none",
            }}
          />
        </AboutPlace>
        <AboutBand>
          <Title>О группе</Title>
          <AboutBandText>
            Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо.
            Группа образовалась в 2009 году и на данный момент состоит из
            Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два
            альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.
          </AboutBandText>
        </AboutBand>
      </section>
    </StyledAboutWrapper>
  </Container>
);

export default About;
