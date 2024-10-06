import Link from 'next/link';
import { Box, Typography, useTheme } from '@mui/material';
import UserSubscribeForm from '@/src/components/UserSubscribeForm/UserSubscribeForm';

import { useTranslations } from 'next-intl';

const Page = () => {
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
          href={'/about-us'}
        >
          About Us
        </Link>

        <UserSubscribeForm/>
      </Box>
    </>
  );
};

export default Page;
