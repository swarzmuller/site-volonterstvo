import { css } from "@emotion/react";

export const SliderSubTitle = css`
  position: relative;
  font-size: 16px;
  text-transform: uppercase;
`;

export const SliderTitle = css`
  position: relative;
  font-size: 56px;
  margin: 17px 0 40px;
  font-weight: 900;
  letter-spacing: 0.7px;
  line-height: 57px;
`;

export const ControlButton = css`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #020202;

  &:disabled {
    opacity: 0.5;
    border: 1px solid #02020234;
  }
`;
