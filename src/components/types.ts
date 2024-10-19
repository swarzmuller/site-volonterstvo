import { Theme } from "@mui/material/styles";
import { Palette } from "@mui/material/styles/createPalette";

export interface ILocale {
  locale: string;
}
interface CustomPalette extends Palette {
  helpers: Record<string, string>;
}

declare module "@mui/material/styles" {
  interface Palette {
    helpers: CustomPalette["helpers"];
  }

  interface PaletteOptions {
    helpers?: CustomPalette["helpers"];
  }
}

// Extend the Theme interface to include the new palette type
export interface CustomTheme extends Theme {
  palette: CustomPalette;
}
export interface LayoutProps {
  params: ILocale;
  children: React.ReactElement;
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: string]: string;
  }
}
