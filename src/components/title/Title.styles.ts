import styled from "styled-components";
import { Theme } from "../../theme";

export const StyledTitle = styled.h3`
  color: ${({ theme }: { theme: Theme }) => theme.colors.black};
  font-size: ${({ theme }: { theme: Theme }) => theme.fontSizes.large};
  font-family: ${({ theme }: { theme: Theme }) => theme.fonts.algereyaSansSc};
  font-weight: 500;
`;
