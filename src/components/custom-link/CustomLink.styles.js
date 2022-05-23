import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const primaryStyles = css`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const invertedStyles = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

const getLinkStyles = ({ inverted } /* : { inverted: Boolean } */) => {
  if (inverted) return invertedStyles;
  return primaryStyles;
};

const smallFontSize = css`
  font-size: 11px;
`;
const mediumFontSize = css`
  font-size: 14px;
`;

const getFontSize = ({ isSmall }) => {
  if (isSmall) return smallFontSize;
  return mediumFontSize;
};

export const StyledCustomLink = styled(Link)`
  ${getLinkStyles}
  ${getFontSize}
  padding: 11.5px 20px;
  font-family: ${({ theme }) => theme.fonts.openSans};
  font-weight: 600;
  transition: 0.2s linear all;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgrey};
  }
`;
