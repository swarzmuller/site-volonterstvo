'use client'
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

const Page = () => {
  return (
   <Box>
     <Typography
       variant={"h2"}
     >
       About us
     </Typography>
     <Link
       key={"/"}
       href={"/"}
     >
       Go home
     </Link>
   </Box>
  );
}

export default Page;
