"use client";
import {ThemeProvider} from '@mui/material';
import theme from "@/src/theme/theme";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import {DraggableCarousel} from "@/src/components";
import MainIndex from '@/src/components/PagesContent/MainIndex/MainIndex';

const Page = ({params: {locale}}) => {
   return (
      <>
         <Header locale={locale}/>
         <main>
            <DraggableCarousel locale={locale}/>
            <MainIndex/>
         </main>
         <Footer/>
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
