import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { theme } from "../config/muim-config";

export const SecondaryButton = styled(Button)`
  background-color: ${theme.palette.secondary.main};
  color: #fff;
  padding: 13px 38px;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  border-radius: 10px;
  text-align: center;
  &:hover {
    background-color: ${theme.palette.secondary[600]};
  }
`;
