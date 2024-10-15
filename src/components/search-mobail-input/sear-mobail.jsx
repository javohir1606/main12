import React from "react";
import styled from "@emotion/styled";
import { colors } from "@mui/material";

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: ${colors.inputBg};
`

export const SearchMobailInput = () => {
  return <Input />;
};
