"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Box, ThemeProvider, Typography, useTheme } from "@mui/material";
import theme from "@/src/theme/theme";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import { DraggableCarousel } from "@/src/components";

const Page = ({ params: { locale } }) => {
  const { palette } = useTheme();
  const t = useTranslations("HomePage");
  return (
    <>
      <Header locale={locale} />
      <DraggableCarousel locale={locale} />
      <Box>
        <Typography variant={"caption"} color={palette.helpers.green}>
          {t("title")}
        </Typography>
        <Typography variant={"h4"} color={palette.helpers.green}>
          тест українською
        </Typography>
        <Link key={"/about-us"} href={`/${locale}/about-us`}>
          About Us
        </Link>
      </Box>
      <Footer />
    </>
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
