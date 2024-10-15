import { IconButton, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { UserIcon } from "../../../../assets/icons/user-icon";
import styled from "@emotion/styled";
import { LekeIcon } from "../../../../assets/icons/lake";
import { KorzinkaIcon } from "../../../../assets/icons/karzinka";
import { theme } from "../../../config/muim-config";

const CustomIconButton = styled(IconButton)`
  color: #1d1d1d;
  max-width: 55px;
`

export const HeaderButton = () => {
 
  
  return <>
    <Stack  gap={"20px"} direction={"row"}>
      <CustomIconButton>
        <UserIcon />
      </CustomIconButton>
      <CustomIconButton>
        <LekeIcon />
      </CustomIconButton>
      <CustomIconButton>
        <KorzinkaIcon />
      </CustomIconButton>
    </Stack>
  </>
};
