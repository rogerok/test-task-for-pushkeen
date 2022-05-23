import styled from "styled-components";
import background from "../../assets/background.jpg";

export const StyledMainPage = styled.main`
  padding-top: 168px;
  padding-bottom: 45px;
  background-color: ${({ theme }) => theme.colors.black};
  background: url(${background}) top -147px center no-repeat;
  background-size: cover;
`;

export const TitlesContainer = styled.header`
  margin: 0 auto;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #000000 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.algereyaSansSc};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const Subtitle = styled.h3`
  margin-bottom: 96px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.algereyaSansSc};
  font-weight: 700;
  font-size: 30px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 40px;
    height: 40px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: 1.3px solid;
    transition: 0.2s all;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
