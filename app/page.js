'use client';
import Link from 'next/link';
import { Box, Typography, useTheme } from '@mui/material';
import UserSubscribeForm from '@/app/ui/UserSubscribeForm/UserSubscribeForm';
import styles from './page.module.scss';
import TestForm from '@/app/ui/UserSubscribeForm/TestForm/TestForm';

const Page = () => {
  const {palette} = useTheme();


  return (
    <Box
      className={styles.siteWrapper}
    >
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

      <Link
        key={'/about-us'}
        href={'/about-us'}
      >
        About Us
      </Link>

      {/*<UserSubscribeForm />*/}

      <TestForm />
    </Box>
  );
};

export default Page;
