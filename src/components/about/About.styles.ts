import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledAboutWrapper = styled.section`
  padding: 31px 0 38px 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  p span {
    font-size: ${({ theme }: { theme: Theme }) => theme.fontSizes.large};
    font-weight: 500;
    font-family: ${({ theme }: { theme: Theme }) => theme.fonts.algereyaSansSc};
    &:first-child {
      color: ${({ theme }: { theme: Theme }) => theme.colors.black};
    }
  }
`;

export const CardCollection = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  li {
    padding: 14px 74px 15px 17px;
    width: 22%;
    margin-right: 10px;
    border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.lightgrey};
    &:hover {
      border-color: ${({ theme }: { theme: Theme }) => theme.colors.black};
    }
  }
  li p {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-bottom: 35px;
    &:first-child span {
      color: ${({ theme }: { theme: Theme }) => theme.colors.black};
      margin-bottom: 5px;
    }
  }
`;

export const AboutPlace = styled.article`
  position: relative;
  margin-bottom: 48px;
  padding-left: 45px;
  display: flex;
  justify-content: space-between;
  border-left: 2px solid
    ${({ theme }: { theme: Theme }) => theme.colors.lightgrey};
  &:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 56px;
    background-color: #0d1e4b;
    top: 40px;
    left: 0;
    transform: translateX(-50%);
  }
`;

export const AboutPlaceSubtitle = styled.p`
  margin: 16px 0;
  color: ${({ theme }: { theme: Theme }) => theme.colors.black};
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.openSans};
  font-weight: 700;
  font-size: 15px;
`;

export const AboutPlaceText = styled.p`
  color: ${({ theme }: { theme: Theme }) => theme.colors.grey};
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.openSans};
  font-weight: 600;
  font-size: 14px;
`;
export const AboutBand = styled.article`
  display: flex;
  justify-content: space-between;
`;

export const AboutBandText = styled.p`
  width: 80%;
`;
