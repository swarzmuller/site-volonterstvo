import {Box, Grid2, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useTranslations} from "next-intl";
import {css} from "@emotion/react";

import Splitter, {LOCATION} from "@/src/components/PagesContent/shared/Splitter/Splitter";
import {GridSize} from "@mui/material/Grid2/Grid2";
import {mock} from "@/src/components/PagesContent/MainIndex/components/Stats/mock";
import * as S from "./styles";
import Link from "next/link";
import {ArrowIcon} from "@/src/assets/icons/ArrowIcon";

const Stats = () => {
   const {palette} = useTheme();
   const t = useTranslations('HomePage');
   const isMobile = useMediaQuery('(max-width: 599px)');

   return (
      <>
         <Grid2 sx={{...S.List}}>
            {mock.map((item, index) => {
               const itemSize: GridSize = Number.isNaN(item.size) ? "grow" : item.size;
               const isFirstItem = index === 0;
               return (
                  <Grid2
                     spacing={itemSize}
                     key={index}
                     sx={{...S.Item}}
                  >
                     <Typography
                        variant="h5"
                        color={palette.primary['900']}
                        sx={{
                           ...S.TextItem,
                           ...(isFirstItem && {...S.FirstTextItem}),
                        }}
                     >
                        {item.value}
                     </Typography>
                     <Typography
                        variant="caption"
                        sx={{...S.Description}}
                     >
                        {t(item.description)}
                     </Typography>
                     {item?.linkText && isMobile &&
                        <Link href={'#'}>
                           <Typography
                              sx={{...S.Link}}
                           >
                              {t(item.linkText)}
                              <Box sx={S.ArrowIconWrapper}>
                                 <ArrowIcon/>
                              </Box>
                           </Typography>
                        </Link>}
                  </Grid2>
               )
            })
            }
         </Grid2>
         <Splitter
            position={LOCATION.right}
            color={palette.divider}
            margin={'0 -15px 0 0'}
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

export default Stats;
