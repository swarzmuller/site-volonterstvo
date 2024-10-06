'use client'
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale);
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
       href={`/${locale}/`}
     >
       Go home
     </Link>
   </Box>
  );
}

export default Page;
