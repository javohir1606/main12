import { IconButton, Stack } from "@mui/material";
import React from "react";
import { UserIcon } from "../../../../assets/icons/user-icon";

export const HeaderButton = () => {
  return <>
    <Stack gap={"20px"} alignItems={"center"} direction={"row"}>
      <IconButton>
        <UserIcon />
      </IconButton>
      <IconButton>
        <UserIcon />
      </IconButton>
      <IconButton>
        <UserIcon />
      </IconButton>
    </Stack>
  </>
};
