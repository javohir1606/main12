import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../Data/product-data";
import img from "../../assets/img/menu.png";
import styled from "@emotion/styled";
// import { theme } from "../config/muim-config";
import ProductDetail from "../cardfayl/card";
export const ProductDetails = () => {
  const { id } = useParams();

  const MenuData = products.find((data) => data.id === parseInt(id));
  const StyleCard = styled.h4`
    font-weight: 400;
    font-size: 40px;
    line-height: 145%;
    color: #1d1d1d;
  `;
  const stylep = styled.link`
    font-weight: 400;
    font-size: 18px;
    line-height: 145%;
    color: #21d581;
    text-decoration: none;
  `;
  return (
    <>
      <Box py={"24px"}>
        <Container maxWidth="xs">
          <Box>
            <Link
              style={{
                textDecoration: "none",
                color: "#618c78",
                fontSize: "16px",
              }}
            >
              Главная / Ковры / Elexus Semerkant 1763 Coken Orta Beige
            </Link>

            <h4 mt={"16px"} mb={"8px"}>
              Elexus Semerkant 1763 Coken Orta Beige
            </h4>
          </Box>
          <Box
            display={"flex"}
            gap={"16px"}
            alignItems={"center"}
            pt={"8px"}
            pb={"16px"}
          >
            <Rating>{MenuData.raiting}</Rating>
            <Typography variant="body1">0 отзывов</Typography>
            <Typography variant="body1">В наличии: 10 штук</Typography>
          </Box>
          <hr />
          <Stack direction={"row"}>

          <Stack
            pt={"35px"}
            pb={"35px"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={"8px"}
          >
            <img src={img} alt="img" />
          </Stack>
          <Stack>
            <ProductDetail />
          </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
