import { css } from "@emotion/react";
import theme from "@/src/theme/theme";
import { inter } from "@/src/theme/fonts";

export const Header = css`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: grid;
  grid-template-columns: 192px 1fr 192px;
  width: 100%;
  padding: 33px 0;
`;

export const Menu = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const MenuItem = css`
  color: ${theme.palette.helpers.black};
  font-family: ${inter.style.fontFamily};
  font-size: 20px;
  font-weight: 900;
`;
