import React from "react";
import logo from "../../../../assets/img/logo.svg";
import { IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { LogoLink } from "./style";
import { LocationIcon } from "../../../../assets/icons/location-icon";
import { SearchInput } from "../../../ui/search-input/search-input";
export const Search = () => {
  const changeInput = (e) =>{
  console.log(e.target.value);
  
  }
  return (
    <Stack direction={"row"} gap={"60px"} flexGrow={1}>
      <LogoLink to={"/"}>
        <img src={logo} alt="logo" />
      </LogoLink>
      <Stack direction={"row"} alignItems={"center"} gap={"8px"}>
        <IconButton>
          <LocationIcon />
        </IconButton>
          <Typography variant="body1">Алматы</Typography>
      </Stack>
       <SearchInput onChange={changeInput}/>
    </Stack>
  );
};
