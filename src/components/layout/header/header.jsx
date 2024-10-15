import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Search } from "./components/search";
import { HeaderButton } from "./components/header-button";
import { theme } from "../../config/muim-config";
import { links } from "./header-data";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Stack
          py={{ xs: "14px", md: "31px" }}
          direction={"row"}
          alignItems={"center"}
          gap={{ xs: "33px", md: "61px" }}
        >
          <Search />
          <Box display={{ xs: "none", md: "block" }}>
            <HeaderButton />
          </Box>
        </Stack>
      </Container>
      <Box bgcolor={theme.palette.grey.main}>
        <Container direction="xs">
          <Stack
            display={{ xs: "none", md: "flex" }}
            direction={"row"}
            justifyContent={"space-between"}
            py={"30px"}
          >
            {links.map((link) => (
              <Link
                style={{ textDecoration: "none" }}
                to={link.path}
                key={link.id}
              >
                <Typography variant="body1">{link.name}</Typography>
              </Link>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
