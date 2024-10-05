'use client'
import { Box, Typography, useTheme } from '@mui/material';

export default function Home() {
  const {palette} = useTheme();
  return (
    <Box>
      <Typography
        variant={'caption'}
        color={palette.helpers.green}
      >
        test
      </Typography>
      <Typography
        variant={'h4'}
        color={palette.helpers.green}
      >
        тест українською
      </Typography>
    </Box>
  );
}
