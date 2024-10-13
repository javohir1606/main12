import React from "react";
import { Container, Stack } from "@mui/material";
import { Search } from "./components/search";
import { HeaderButton } from "./components/header-button";
export const Header = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Stack py={"31px"} direction={"row"} alignItems={"center"} gap={"61px"}>
          <Search />
          <HeaderButton />
        </Stack>
      </Container>
    </>
  );
};
