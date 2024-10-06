'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Box, Typography, useTheme } from '@mui/material';
import UserSubscribeForm from '@/src/components/UserSubscribeForm/UserSubscribeForm';
import { unstable_setRequestLocale } from 'next-intl/server';


const Page = ({params: {locale}}) => {
  unstable_setRequestLocale(locale);
  const {palette} = useTheme();
  const t = useTranslations('HomePage');

  return (
    <>
      <Box>
        <Typography
          variant={'caption'}
          color={palette.helpers.green}
        >
          {t('title')}
        </Typography>
        <Typography
          variant={'h4'}
          color={palette.helpers.green}
        >
          тест українською
        </Typography>

        <Link
          key={'/about-us'}
          href={`/${locale}/about-us`}
        >
          About Us
        </Link>

        <UserSubscribeForm/>
      </Box>
    </>
  );
};

export default Page;
