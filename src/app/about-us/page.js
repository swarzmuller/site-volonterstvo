'use client'
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('AboutUs');
  return (
   <Box>
     <Typography
       variant={"h2"}
     >
       {t('title')}
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
