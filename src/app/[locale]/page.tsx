"use client";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/src/theme/theme";
// import Footer from "@/src/components/Footer/Footer";
import { DraggableCarousel } from "@/src/components";
import MainIndex from "@/src/components/PagesContent/MainIndex/MainIndex";
import { ILocale } from "@/src/components/types";

const Page = ({ params: { locale } }: { params: ILocale }) => {
  return (
    <Box>
      <DraggableCarousel locale={locale} />
      <MainIndex />
      {/* <Footer /> */}
    </Box>
  );
};

const ThemeWrapper = (props: { params: ILocale }) => {
  return (
    <ThemeProvider theme={theme}>
      <Page {...props} />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
