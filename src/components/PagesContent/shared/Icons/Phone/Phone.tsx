import {FC} from "react";
import {Box} from "@mui/material";

export enum LOCATION {
  left = 0,
  right = 180,
}

interface SplitterProps {
  width: number,
  color: string,
  size?: number,
}

const Phone: FC<SplitterProps> = ({color, width, size = 256}) => {
  return (
    <Box
      sx={{
        color: color,
      }}
    >
      <svg
        width={width}
        height={width}
        viewBox={`0 0 ${size} ${size}`}
        fill="currentColor"
      >
        <path
          d="M208,136H136V120h48a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H136V32a8,8,0,0,0-16,0V48H72A16,16,0,0,0,56,64v40a16,16,0,0,0,16,16h48v16H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h72v16a8,8,0,0,0,16,0V208h72a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136ZM72,64H184v40H72ZM208,192H48V152H208v40Z"
        />
      </svg>
    </Box>
  )
    ;
};

export default Phone;
