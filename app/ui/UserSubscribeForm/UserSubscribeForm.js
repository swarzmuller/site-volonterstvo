'use client';
import Link from 'next/link';
import { Box, Typography, useTheme } from '@mui/material';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

// const spFormId = '4c48f7572aaa6dccafeaa395fcced4fc814a4855e73df659defce7df955a4041';
const spFormId = 'f4c3df4d796cf4aeca27605e355fdc84dd082aaf10a69c4b884e39bcc90fcb35';
let formContent;

const UserSubscribeForm = () => {
  const userSubscribeForm = useRef();

  const onLoad = () => {
    // const interval = setInterval(() => {
      if(!formContent) {
        formContent = document.querySelector(`[sp-hash="${spFormId}"]`);
      }
      if (formContent && userSubscribeForm.current) {
        userSubscribeForm.current.innerHTML = '';
        userSubscribeForm.current.appendChild(formContent);
        // clearInterval(interval);
      }
    // }, 100);

    // setTimeout(() => clearInterval(interval), 5000);
  }

  useEffect(() => {
    // const script = document.createElement('script');
    // script.src = 'https://web.webformscr.com/apps/fc3/build/loader.js';
    // script.async = true;
    // script.onload = onLoad;
    // script.setAttribute('sp-form-id', spFormId);
    // document.body.appendChild(script);
    //
    return () => {
      console.log(userSubscribeForm.current)
      userSubscribeForm.current?.remove();
    };
  }, []);

  return (
    <>
      <Box
        ref={userSubscribeForm}
        id={'userSubscribeForm'}
      />

      <Script
        src="https://web.webformscr.com/apps/fc3/build/loader.js"
        sp-form-id={spFormId}
        onLoad={onLoad}
      />
    </>
  );
};

export default UserSubscribeForm;
