import { css } from "@emotion/react";
import theme from "@/src/theme/theme";
import { inter } from "@/src/theme/fonts";

export const Header = css`
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 33px 0;
  margin-bottom: -114px;
`;

export const Layout = css`
  display: grid;
  grid-template-columns: 192px 1fr 134px;
  box-sizing: border-box;

  & > a {
    display: flex;
    align-items: center;
  }
`;

export const Menu = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const MenuItem = css`
  position: relative;

  &:before {
    position: absolute;
    left: 0;
    top: 15px;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
  }

  button {
    color: ${theme.palette.common.black};
    font-family: ${inter.style.fontFamily};
    font-size: 20px;
    font-weight: 900;
    align-items: center;
    gap: 10px;

    a {
      text-decoration: none;
      color: ${theme.palette.helpers.black};
    }
  }

  img {
    transition: 0.3s;
  }

  .imageRotate {
    rotate: 180deg;
  }
`;

export const SubMenu = css`
  position: absolute;
  left: -150px;
  top: 40px;
  z-index: 99999;
  display: flex;
  background: ${theme.palette.common.white};
  box-shadow: -4px 4px 10px 0px #00000029;
  border-radius: 6px;
  overflow: hidden;
  animation: opcity 0.3s forwards;

  @keyframes opcity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SubMenuList = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 0 25px 0;
  min-width: 195px;

  a {
    display: flex;
    align-items: center;
    gap: 11px;
    color: ${theme.palette.common.black};
    font-family: ${inter.style.fontFamily};
    font-size: 16px;
    text-decoration: none;
    white-space: nowrap;
    padding: 0 25px;

    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }
`;

export const SubMenuInfo = css`
  width: 282px;
  border-right: 1px solid #b1c2ff;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 12px;
    line-height: 14px;
    padding: 10px 15px 15px 15px;
  }

  a {
    font-family: ${inter.style.fontFamily};
    font-size: 10px;
    padding: 10px;
    border: 1px solid ${theme.palette.common.black};
    color: ${theme.palette.common.black};
    text-decoration: none;
    border-radius: 23px;
    margin-top: 14px;
    min-width: 143px;
  }
`;

export const Select = css`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 74px;
  height: 48px;
  margin-left: auto;
  border-radius: 25px;
  border: 1px solid ${theme.palette.common.black};

  &:focus-visible {
    outline: none;
  }

  .MuiSelect-select {
    padding: 0 !important;
    outline: 0;
  }
`;

export const LangText = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  text-transform: uppercase;
  font-size: 24px;
`;

export const Option = css`
  li {
    padding: 0 !important;
    background: red;
  }
  a {
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: ${theme.palette.common.black};
  }
`;
