import { getTranslations } from 'next-intl/server';
import { Box, ThemeProvider } from '@mui/material';
import theme from '@/src/theme/theme';
import { LangProvider } from '@/src/context/LocaleContext/LocaleContext';

import Footer from '@/src/components/Footer/Footer';
import Header from '@/src/components/Header/Header';
import styles from '@/src/app/page.module.scss';

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title')
  };
}

let l='en';

const RootLayout = ( {children} ) => {
  return (
    <html lang={l}>
    <body>
    <ThemeProvider theme={theme}>
      <LangProvider>
        <Box
          className={styles.siteWrapper}
        >
          <Header />
          {children}
          <Footer />
        </Box>
      </LangProvider>
    </ThemeProvider>
    </body>
    </html>
  );
};

export default RootLayout;
