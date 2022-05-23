/* eslint-disable react/require-default-props */
import React, { FC } from "react";
import { StyledCustomLink } from "./CustomLink.styles";

interface CustomLinkProps {
  children: React.ReactNode;
  inverted?: Boolean;
  isSmall?: Boolean;
  to: string;
}

const CustomLink: FC<CustomLinkProps> = ({
  inverted = false,
  isSmall,
  children,
  to,
}) => (
  // @ts-ignore
  <StyledCustomLink inverted={inverted} to={to} isSmall={isSmall}>
    {children}
  </StyledCustomLink>
);

export default CustomLink;
