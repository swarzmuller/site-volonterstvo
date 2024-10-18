"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Logo } from "@/public";
import { LayoutWrapper } from "@/src/components";
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
    <Box sx={S.Header}>
      <LayoutWrapper sx={S.Layout}>
        <Link href="/">
          <Image src={Logo.src} width={192} height={45} alt="Logo" />
        </Link>
        <Menu />
        <Select
          sx={S.Select}
          value={userLocale}
          onChange={handleChange}
          IconComponent={() => null}
          renderValue={(value) => (
            <Typography sx={S.LangText}>{value}</Typography>
          )}
        >
          <MenuItem sx={S.Option} value={"en"}>
            <Link href={redirectedPathName("en")}>EN</Link>
          </MenuItem>
          <MenuItem sx={S.Option} value={"ua"}>
            <Link href={redirectedPathName("ua")}>UA</Link>
          </MenuItem>
        </Select>
      </LayoutWrapper>
    </Box>
  );
};

export default Header;
