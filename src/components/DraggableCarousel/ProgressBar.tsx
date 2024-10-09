import { useEffect } from "react";
import { Box } from "@mui/material";
import { POGRESS_TIMER } from "./helpers";
import { ProgressBarProps } from "./types";
import * as S from "./styles";

const ProgressBar = ({ progress, next, setProgress }: ProgressBarProps) => {
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(progress + 1);
      }, POGRESS_TIMER);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, next]);

  return (
    <Box sx={{...S.ProgressBar}}>
      <span style={{ width: `${progress}%` }}></span>
    </Box>
  );
};

export default ProgressBar;
