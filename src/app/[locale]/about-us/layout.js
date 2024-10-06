import { Box, ThemeProvider } from '@mui/material';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import theme from '@/src/theme/theme';

export const runtime = 'edge';
export default async function LocaleLayoutAbout( {
                                              children,
                                              params: {locale},
                                            } ) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <>
      {children}
    </>
  );
}
