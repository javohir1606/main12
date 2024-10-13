import { Box, Container, Stack } from "@mui/material";
import banner from "../../assets/img/banner.png";
import React from "react";
import { theme } from "../config/muim-config";
import styled from "@emotion/styled";
import { SecondaryButton } from "../secondery-button/style";

const Title = styled.h1`
  font-weight: 700;
  font-size: 60px;
  line-height: 130%;
  color: #f9f9f9;
  max-width: 524px;
  margin-bottom: 32px;
`;

export const Banner = () => {
  return (
    <Box py={"97px"} bgcolor={theme.palette.primary.main}>
      <Container maxWidth={"xs"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box>
            <Title>Новая коллекция ковров Venetta</Title>
            <SecondaryButton>Смотреть все</SecondaryButton>
          </Box>
          <Stack gap={`40px`} direction={"row"}>
            <Box maxWidth={"303px"}>
              <img src={banner} alt="img" />
            </Box>
            <Box maxWidth={"303px"}>
              <img src={banner} alt="img" />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
