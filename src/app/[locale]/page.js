"use client";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/src/theme/theme";
// import Footer from "@/src/components/Footer/Footer";
import { DraggableCarousel, LayoutWrapper } from "@/src/components";
import MainIndex from "@/src/components/PagesContent/MainIndex/MainIndex";

const Page = ({ params: { locale } }) => {
  return (
    <Box>
      <DraggableCarousel locale={locale} />
      <LayoutWrapper>
        <MainIndex />
      </LayoutWrapper>
      {/* <Footer /> */}
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
