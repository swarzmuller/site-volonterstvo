"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Logo from "@/public/images/header/logo.svg";
import Menu from "./Menu";
import * as S from "./styles";

const Header = () => {
  const pathName = usePathname();
  const locale = useLocale();
  const [userLocale, setUserLocale] = useState(locale);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedLocale = event.target.value;
    setUserLocale(selectedLocale);
  };
  const redirectedPathName = (lang: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = lang;
    return segments.join("/");
  };

  return (
    <Box sx={{ ...S.Header }}>
      <Link href="/">
        <Image src={Logo.src} width={192} height={45} alt="Logo" />
      </Link>
      <Menu />
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userLocale}
          label="Age"
          onChange={handleChange}
          renderValue={(value) => <Typography>{value}</Typography>}
        >
          <MenuItem value={"en"}>
            <Link href={redirectedPathName("en")}>EN</Link>
          </MenuItem>
          <MenuItem value={"ua"}>
            <Link href={redirectedPathName("ua")}>UA</Link>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Header;
