"use client";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/src/theme/theme";
// import Footer from "@/src/components/Footer/Footer";
import { DraggableCarousel } from "@/src/components";
import MainIndex from "@/src/components/PagesContent/MainIndex/MainIndex";
import { LayoutProps } from "@/src/components/types";

const Page = ({ params: { locale } } : LayoutProps) => {
  return (
    <Box>
      <DraggableCarousel locale={locale} />
      <MainIndex />
      {/* <Footer /> */}
    </Box>
  );
};

const ThemeWrapper = (props: LayoutProps) => {
   return (
      <ThemeProvider theme={theme}>
         <Page {...props} />
      </ThemeProvider>
   );
};

export default ThemeWrapper;
