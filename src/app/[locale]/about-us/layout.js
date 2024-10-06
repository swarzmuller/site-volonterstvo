import { Box, ThemeProvider } from '@mui/material';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import theme from '@/src/theme/theme';

export const runtime = 'edge';

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title')
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' , locale: 'en' }, {lang: 'ua', locale: 'ua'}]
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
