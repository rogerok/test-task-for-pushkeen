import styled, { css } from "styled-components";
import { Theme } from "../../theme";
import background from "../../assets/background.jpg";

export const StyledPoster = styled.main`
  padding-top: 168px;
  padding-bottom: 45px;
  background-color: ${({ theme }) => theme.colors.black};
  background: url(${background}) top -147px center no-repeat;
  background-size: cover;
`;

export const TitlesContainer = styled.header`
  margin: 0 auto 96px auto;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #000000 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const titleStyles = css`
  text-align: center;
  color: ${({ theme }: { theme: Theme }) => theme.colors.white};
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.algereyaSansSc};
  font-weight: 700;
`;

export const Title = styled.h1`
  ${titleStyles}
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const Subtitle = styled.h3`
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
