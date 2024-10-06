import { Box, ThemeProvider } from '@mui/material';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import theme from '@/src/theme/theme';
import { routing } from '@/src/i18n/routing';

export const runtime = 'edge';

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title')
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}


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
