import {Grid2, Stack, Typography, useTheme} from "@mui/material";
import {useTranslations} from "next-intl";
import {STATS_DATA} from "@/src/components/PagesContent/MainIndex/components/Stats/Stats.constants";

const Stats = () => {
  const {palette} = useTheme();
  const t = useTranslations('HomePage');
  return (
   <Grid2
     container
     sx={{
       padding: '30px 50px',
     }}
     spacing={4}
     justifyContent="space-between"
   >
     {
       STATS_DATA.map((stat, id) => {
         return (
           <Grid2
             key={id}
             item
             sm={stat.size}
             xs={12}
             textAlign="center"
           >
             <Stack
              direction="column"
             >
               <Typography
                variant="h5"
                fontSize='64px'
                color={palette.primary['900']}
                sx={{
                  marginBottom: '12px',
                }}
               >
                 {stat.value}
               </Typography>
               <Typography
                variant="caption"
                fontSize='22px'
                fontWeight="normal"
               >
                 {t(stat.description)}
               </Typography>
             </Stack>
           </Grid2>
         )
       })
     }
   </Grid2>
  );
};

export default Stats;
