import { css } from "@emotion/react";
import { roboto } from "@/src/theme/fonts";
import theme from "@/src/theme/theme";

export const Container = (background: string) => css`
  position: relative;
  margin: 0 -8px;
  transition: 0.3s;
  background: ${background};
`;

export const Carousel = css`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 120px 0 63px;

  @media (max-width: 1400px) {
    overflow: hidden;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

export const Cards = css`
  position: relative;
  height: 632px;

  @media (max-width: 1400px) {
    height: 410px;
  }

  @media (max-width: 960px) {
    grid-area: 1;
    width: 330px;
    height: 300px;
    margin: 0 auto;
  }

  .deck {
    position: absolute;
    right: 92px;
    top: 36px;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: none;
    cursor: grab;
    z-index: 5;

    @media (max-width: 1400px) {
      top: 16px;
      right: 18px;
    }

    @media (max-width: 960px) {
      top: 11px;
      right: -3px;
    }

    & > div {
      position: relative;
      touch-action: none;
      background-repeat: no-repeat;
      background-position: center center;
      width: 632px;
      height: 598px;
      will-change: transform;
      border-radius: 10px;

      @media (max-width: 1400px) {
        width: 480px;
        height: 410px;
        background-size: contain;
      }

      @media (max-width: 960px) {
        width: 330px;
        height: 300px;
      }
    }
  }
`;

export const VolonteersText = css`
  position: absolute;
  z-index: 1;
  right: 178px;
  top: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-sizing: border-box;
  font-size: 24px;
  width: 165px;
  height: 165px;
  border-radius: 50%;
  background: ${theme.palette.common.white};
  user-select: none;

  span {
    font-size: 49px;
    line-height: 45px;
  }

  @media (max-width: 1400px) {
    right: 141px;
    top: 86px;
    width: 120px;
    height: 120px;
    font-size: 17px;

    span {
      font-size: 38px;
      line-height: 33px;
    }
  }

  @media (max-width: 960px) {
    right: 95px;
    top: 69px;
    width: 86px;
    height: 86px;
    font-size: 12px;

    span {
      font-size: 28px;
      line-height: 24px;
    }
  }
`;

export const InfoWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 69px 18px 52px 85px;

  @media (max-width: 1400px) {
    padding: 40px 18px 39px 13px;
  }
`;

export const SliderSubTitle = css`
  position: relative;
  font-size: 16px;
  text-transform: uppercase;

  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;

export const SliderTitle = css`
  position: relative;
  font-size: 56px;
  margin: 17px 0 40px;
  font-weight: 900;
  letter-spacing: 0.7px;
  line-height: 57px;
  font-family: ${roboto.style.fontFamily};

  @media (max-width: 1400px) {
    font-size: 40px;
    line-height: 42px;
  }
`;

export const JoinButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 18px 40px;
  background: ${theme.palette.common.white};
  min-width: 92px;
  color: ${theme.palette.helpers.black};
  border-radius: 46px;
  box-shadow: 4px 5px 4px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  margin-left: -6px;
  letter-spacing: -0.5px;
  transition: 0.3s;

  &:hover {
    box-shadow: none;
  }

  @media (max-width: 1400px) {
    min-width: 309px;
    font-weight: 300;
    padding: 18px;
    font-size: 24px;
  }
`;

export const SwitchSlider = css`
  position: absolute;
  bottom: 53px;
  left: 81px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 1400px) {
    bottom: 40px;
    left: 13px;
  }
`;

export const ControlButton = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${theme.palette.helpers.darkGrey};

  &:disabled {
    opacity: 0.5;
    border: 1px solid ${theme.palette.helpers.darkGreyTransparent};
  }
`;

export const ProgressWrapper = css`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ProgressBar = css`
  position: relative;
  width: 26px;
  height: 2px;
  background: ${theme.palette.helpers.darkGreyTransparent};
  margin: 0 10px;
  overflow: hidden;

  span {
    position: absolute;
    top: 0;
    left: 0;
    background: ${theme.palette.helpers.black};
    height: 2px;
    transition: 0.1s;
  }
`;
