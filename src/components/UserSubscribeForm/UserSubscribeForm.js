'use client';

import { Box } from '@mui/material';
import Script from 'next/script';

const spFormId = '4c48f7572aaa6dccafeaa395fcced4fc814a4855e73df659defce7df955a4041';
const UserSubscribeForm = () => {

  return (
    <>
      <Box
        id={'userSubscribeForm'}
      >
        <Script
          src="https://web.webformscr.com/apps/fc3/build/loader.js"
          sp-form-id={spFormId}
        />
      </Box>

    </>
  );
};

export default UserSubscribeForm;
