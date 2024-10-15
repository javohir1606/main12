import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../../../config/muim-config";
export const LogoLink = styled(Link) `
max-width: 220px;
display: flex;
align-items: center;

@media  (min-width: ${theme.breakpoints.values.md}px) {
  max-width: 220px;
}
`

