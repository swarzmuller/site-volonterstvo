import {Stack, Typography, useTheme} from "@mui/material";
import {useTranslations} from "next-intl";
import Splitter, {LOCATION} from "@/src/components/PagesContent/shared/Splitter/Splitter";
import * as S from "./styles";
import {css} from "@emotion/react";

const HeaderAchievements = () => {
   const {palette} = useTheme();
   const t = useTranslations("HomePage");
   return (
      <>
         <Stack
            direction="row"
            sx={{
               marginTop: {
                  xs: '100px',
                  md: '180px',
               },
               marginBottom: {
                  xs: '50px',
                  md: '80px',
               },
               justifyContent: 'center',
            }}
         >
            <Typography variant="h2" sx={{...S.AchievementTitle}}>
               {t("ourAchievements.our")}{" "}
               <Typography
                  component="span"
                  variant="h2"
                  fontWeight="bold"
                  sx={{...S.AchievementTitleSpan}}
               >
                  {t("ourAchievements.achievements")}
               </Typography>{" "}
               {t("ourAchievements.forToday")}
            </Typography>
         </Stack>
         <Splitter
            position={LOCATION.left}
            color={palette.divider}
            margin={'0 0 0 -15px'}
            svgStyles={css`
               width: 565px;
               height: 28px;
               @media (max-width: 600px) {
                  width: 234px;
                  height: 11px;
               }
            `}
         />
      </>
   );
};

export default HeaderAchievements;
