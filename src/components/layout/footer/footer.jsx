import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box bgcolor={"#F2F2F2"}>
      <Container maxWidth="xs">
        <Stack sx={{display:{xs:"column", md:"row"}}} py={"40px"}  gap={"64px"}>
        <Stack>
          <Typography variant="body1" mb={"24px"}>Каталог товаров</Typography>
          <Typography mb={"16px"} color="grey">Ковры</Typography>
          <Typography mb={"16px"} color="grey">Коврики</Typography>
          <Typography mb={"16px"} color="grey">Дорожки</Typography>
          <Typography mb={"16px"} color="grey">Для ванной</Typography>
          <Typography mb={"16px"} color="grey">Особенные ковры</Typography>
        </Stack>
        <Stack>
          <Typography variant="body1" mb={"24px"}>Личный кабинет</Typography>
          <Typography mb={"16px"} color="grey">Личный кабинет</Typography>
          <Typography mb={"16px"} color="grey">Мои заказы</Typography>
          <Typography mb={"16px"} color="grey">Избранное</Typography>
        </Stack>
        <Stack>
          <Typography variant="body1" mb={"24px"}>Центр поддержки</Typography>
          <Typography mb={"16px"} color="grey">Контакты</Typography>
          <Typography mb={"16px"} color="grey">Доставка</Typography>
          <Typography mb={"16px"} color="grey">Возвраты</Typography>
        </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
