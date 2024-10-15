import React from "react";
import styled from "@emotion/styled";
import { theme } from "../config/muim-config";
import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";
import { HeartIco } from "../../assets/icons/icon";
import { HeartActiveIcon } from "../../assets/icons/like";
const CardWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;
`;

const NewCardBadge = styled.p`
  background-color: ${theme.palette.primary.main};
  color: #fff;
  padding: 3px 20px;
  position: absolute;
  top: 0px;
  left: 0;
`;
const NueCand = styled.p`
  background-color: ${theme.palette.primary.main};
  color: #fff;
  padding: 3px 20px;
`;

export const ProductCard = ({
  new: newProduct,
  id,
  img,
  title,
  price,
  size,
  location,
  raiting,
  instalment,
}) => {
  const [active, setActive] = React.useState(false);
  return (
    <CardWrapper>
      <Stack
        mb={"20px"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <div>{newProduct && <NewCardBadge>Новинка</NewCardBadge>}</div>
        <IconButton onClick={() => setActive(!active)}>{active ? <HeartActiveIcon /> : <HeartIco />}</IconButton>
      </Stack>
      <Box mb={"20px"} textAlign={"center"}>
        <img src={img} alt="img" />
      </Box>
      <Typography mb={"8px"} fontWeight={500} variant="body1">
        {title}
      </Typography>
      <Typography mb={"8px"} variant="body2">
        Размер: {size}
      </Typography>
      <Typography mb={"8px"} variant="body2">
        Производитель: {location}
      </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
        <Rating value={raiting} precision={0.5} readOnly />
      </Stack>
      <Stack></Stack>
      <Stack
        direction={"row"}
        gap={"62px"}
        alignItems={"center"}
        mt={"16px"}
        mb={"8px"}
      >
        <Typography variant="body2">Цена</Typography>
        <Typography variant="body2">В рассрочку</Typography>
      </Stack>
      <Stack
        mb={"21px"}
        mt={"10px"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="body1">{price}</Typography>
        <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
          <NueCand> {instalment.price}</NueCand>
          <Typography>x {instalment.month} Mec</Typography>
        </Stack>
      </Stack>
    </CardWrapper>
  );
};
