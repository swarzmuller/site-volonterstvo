import {NextIntlClientProvider} from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import {getTranslations} from 'next-intl/server';

export const runtime = 'edge';
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title')
  };
}

export async function generateStaticParams() {
  return {
    paths:[
      {params: {locale: 'en' }},
      {params: {locale: 'ua'}},
    ],
    fallback:true,
  }
}

import { ThemeProvider } from '@mui/material';
import theme from '@/src/theme/theme';
import Header from '@/src/components/Header/Header';


export default async function LocaleLayout({
                                             children,
                                             params: {locale}
                                           }) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
    <body>
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider theme={theme}>
        <Header
          locale={locale}
        />
      {children}
      </ThemeProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
