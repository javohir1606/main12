import React from "react";
import logo from "../../../../assets/img/logo.svg";
import img from "../../../../assets/img/logo-mobail.svg";
import {
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";
import { LogoLink } from "./style";
import { theme } from "../../../config/muim-config";
import { LocationIcon } from "../../../../assets/icons/location-icon";
import { SearchInput } from "../../../ui/search-input/search-input";
import { BurgerMenu } from "../../../../assets/icons/burger-menu";
import { useToggle } from "../../../hooks/useToggle";
import { links } from "../header-data";
import { Link } from "react-router-dom";
import { HeaderButton } from "./header-button";
import { SearchMobailInput } from "../../../search-mobail-input/sear-mobail";
export const Search = () => {
  const md = useMediaQuery(`(min-width:${theme.breakpoints.values.md}px)`);
  const { isOpen, close, open } = useToggle();
  const changeInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <Stack direction={"row"} gap={{ xs: "33px", md: "60px" }} alignItems={"center"} flexGrow={1}>
      <Stack gap={"16px"} alignItems={"center"} direction={"row"}>
        <IconButton
          onClick={open}
          sx={{ display: { sx: "block", md: "none" } }}
        >
          <BurgerMenu />
        </IconButton>
        <LogoLink to={"/"}>
          {md ? (
            <img style={{ verticalAlign: "bottom" }} src={logo} alt="logo" />
          ) : (
            <img style={{ verticalAlign: "bottom" }} src={img} alt="logo" />
          )}
        </LogoLink>
      </Stack>
      <Stack
        display={{ xs: "none", md: "flex" }}
        direction={"row"}
        alignItems={"center"}
        gap={"8px"}
      >
        <IconButton>
          <LocationIcon />
        </IconButton>
        <Typography variant="body1">Алматы</Typography>
      </Stack>
      {md ? (
        <SearchInput onChange={changeInput} />
      ) : (
        <SearchMobailInput onChange={changeInput} />
      )}
      <Drawer open={isOpen} onClose={close} anchor="left">
        <Box bgcolor={"white"} height="100vh" width={"300px"}>
          <Stack mb={"20px"} gap={"20px"} p={"30px"}>
            {links.map((item) => (
              <Link style={{ textDecoration: "none" }} key={item.id} to={"/"}>
                <Typography variant="body1">{item.name}</Typography>
              </Link>
            ))}
          </Stack>
          <HeaderButton />
        </Box>
      </Drawer>
    </Stack>
  );
};
