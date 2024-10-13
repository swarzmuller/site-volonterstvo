import {FC} from "react";
import {Box} from "@mui/material";

export enum DIRECTION {
  left = 0,
  right = 180,
}

interface CustomArrowProps {
  direction: DIRECTION,
  color: string,
}

const MARGIN = 24;

const CustomArrow: FC<CustomArrowProps> = ({direction, color}) => {
  const isLeft = direction === DIRECTION.left;
  const marginLeft = isLeft ? 0 : -MARGIN;
  const marginRight = isLeft ? -MARGIN : 0;

  return (
    <Box
      sx={{
        color: color,
        transform: `rotate(${direction}deg)`,
        marginLeft: `${marginLeft}px`,
        marginRight: `${marginRight}px`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="101"
        height="240"
        viewBox="0 0 101 240"
        fill="none"
      >
        <path
          d="M51.3185 114.313L100.889 0.253906L44.0996 24.3171L0.785889 119.126L44.0996 218.266L100.889 239.442L51.3185 114.313Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  );
};

export default CustomArrow;
