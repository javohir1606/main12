import React from 'react';
import styled from '@emotion/styled';
import { Box, Button, Typography, Stack } from '@mui/material';
import { HeartIco } from "../../assets/icons/icon"; // Heart icon import
import { HeartActiveIcon } from "../../assets/icons/like"; // Active heart icon import

const Wrapper = styled(Box)`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  text-align: center;
`;

const PriceText = styled(Typography)`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InstallmentText = styled(Typography)`
  font-size: 24px;
  color: #666;
  margin-bottom: 20px;
`;

const SizeText = styled(Typography)`
  margin-bottom: 20px;
`;

const CardButton = styled(Button)`
  background-color: #f44336; // Red color
  color: white;
  &:hover {
    background-color: #d32f2f; // Darker red on hover
  }
`;

const WhatsAppButton = styled(Button)`
  background-color: #25D366; // WhatsApp green color
  color: white;
  margin-top: 10px;
  &:hover {
    background-color: #1ebe56; // Darker green on hover
  }
`;

export const ProductDetail = () => {
  return (
    <Wrapper>
      <PriceText>Цена: 160.000₮</PriceText>
      <InstallmentText>В рассрочку: 13.333₮</InstallmentText>
      <SizeText>Размер: 160x230 см</SizeText>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <CardButton variant="contained">В корзину</CardButton>
        <Button variant="outlined">
          <HeartIco /> {/* Replace with appropriate icon component */}
        </Button>
      </Stack>

      <Stack spacing={1} mt={2}>
        <Typography variant="body2">Возврат в течении 14 дней</Typography>
        <Typography variant="body2">Среднее время доставки 2.5 дня</Typography>
      </Stack>

      <WhatsAppButton variant="contained">Написать</WhatsAppButton>
    </Wrapper>
  );
};

export default ProductDetail;
