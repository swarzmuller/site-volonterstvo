"use client";
import { Box, ThemeProvider } from '@mui/material';
import theme from "@/src/theme/theme";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import { DraggableCarousel } from "@/src/components";
import MainIndex from '@/src/components/PagesContent/MainIndex/MainIndex';

const Page = ({ params: { locale } }) => {
  return (
    <Box
      sx={{
        margin: "auto",
        border: '1px solid',
        width: '100%',
        maxWidth: '1440px',
      }}
    >
      <Header locale={locale} />
      <DraggableCarousel locale={locale} />
      <MainIndex />
      <Footer />
    </Box>
  );
};

const ThemeWrapper = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Page {...props} />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
