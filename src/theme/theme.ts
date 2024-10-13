"use client";

import { createTheme } from "@mui/material/styles";
import { inter, poppins, roboto } from "@/src/theme/fonts";
import { CustomTheme } from "../components/types";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0057B8",
      100: "#B3D7FF",
      200: "#80BCFF",
      300: "#4DA1FF",
      400: "#1A86FF",
      500: "#006DE6",
      600: "#0054B3",
      700: "#003C80",
      800: "#00244D",
      900: "#0C0056",
    },
    secondary: {
      main: "#FAE0FC",
    },
    text: {
      primary: "#1C1C1C",
    },
    common: {
      white: "#FFFFFF",
    },
    helpers: {
      // Custom helpers section
      yellow: "#EED686",
      rose: "#EEA1A9",
      violet: "#A9BBED",
      green: "#B7DB9A",
      black: "#000000",
      darkGrey: "#020202",
      darkGreyTransparent: "#02020234",
      skyBlue: "#BDE8FA",
      lightGrayishOrange: "#F6E8CD",
      paleMagenta: "#FFE5FD",
    },
    divider: "#E7ECFF",
  },
  typography: {
    fontFamily: `${inter.style.fontFamily}, ${poppins.style.fontFamily}, ${roboto.style.fontFamily}, sans-serif`,
    h2: {
      fontFamily: `${inter.style.fontFamily}, sans-serif`,
      fontSize: "84px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "54px",
    },
    h4: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,
      fontSize: "54px",
      fontWeight: 800,
    },
    h5: {
      fontFamily: `${inter.style.fontFamily}, sans-serif`,
      fontSize: "32px",
      fontWeight: 800,
    },
    body1: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,
      fontSize: "24px",
      fontWeight: 300,
    },
    body2: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,
      fontSize: "14px",
      fontWeight: 300,
    },
    caption: {
      fontFamily: `${inter.style.fontFamily}, sans-serif`,
      fontSize: "20px",
      fontWeight: 600,
    },
  },
}) as CustomTheme;

export default theme;
