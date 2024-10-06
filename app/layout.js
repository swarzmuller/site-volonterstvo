import { getLocale } from 'next-intl/server';
import { Box, ThemeProvider } from '@mui/material';
import theme from '@/src/theme/theme';
import { LangProvider } from '@/src/context/LocaleContext/LocaleContext';

import Footer from '@/src/components/Footer/Footer';
import Header from '@/src/components/Header/Header';
import styles from '@/app/page.module.scss';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = async ( {children} ) => {
  const locale = await getLocale();

  return (
    <html lang={locale}>
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
