import React, { FC } from "react";
import { StyledContainer } from "./Container.styles";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
