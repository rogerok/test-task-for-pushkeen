import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/app-logo.svg";

export const StyledHeader = styled.header`
  padding: 30px 0;
  background-color: #101010;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledLogo = styled(Logo)`
  font-size: 28px;
  &:hover {
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const LinksContainer = styled.p`
  margin-left: auto;
  &:last-child a {
    margin-left: 12px;
  }
`;

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 11.5px 40px;
  transition: 0.2s linear all;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgrey};
  }
`;
