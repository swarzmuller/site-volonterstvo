import {Grid2, Stack, Typography, useTheme} from "@mui/material";
import {useTranslations} from "next-intl";
import {DATA} from "@/src/components/PagesContent/MainIndex/components/WorkDirections/WorkDirections.constants";
import CustomArrow, {DIRECTION} from "@/src/components/PagesContent/shared/CustomArrow/CustomArrow";
import Splitter, {LOCATION} from "@/src/components/PagesContent/shared/Splitter/Splitter";

const WorkDirections = () => {
  const {palette} = useTheme();
  const t = useTranslations('HomePage');
  return (
    <>
     <Grid2
       container
       sx={{
         padding: '50px 16px',
       }}
       justifyContent="space-between"
     >
       {
         DATA.map((item, id) => {
           const Icon = item.Icon;
           return (
             <Grid2
               key={id}
               size={{sm: 3, xs: 12}}
               textAlign="center"
               sx={{
                 transform: `rotate(${item.rotationAngle}deg)`
               }}
             >
               <Stack
                direction="row"
                alignItems="center"
               >
                 <CustomArrow
                   direction={DIRECTION.left}
                   color={item.color}
                 />
                 <Stack
                   direction="column"
                 >
                   <Icon
                     color={palette.primary['900']}
                     width={52}
                   />
                   <Typography
                     variant="h4"
                     fontSize='19px'
                     color={palette.primary["900"]}
                     sx={{
                       textTransform: 'uppercase',
                       marginBottom: '12px',
                       maxWidth: `${item.maxWidth}px`,
                     }}
                   >
                     {t(item.description)}
                   </Typography>
                 </Stack>
                 <CustomArrow
                   direction={DIRECTION.right}
                   color={item.color}
                 />
               </Stack>
             </Grid2>
           )
         })
       }
     </Grid2>
      <Splitter
        position={LOCATION.right}
        color={palette.divider}
      />
    </>
  );
};

export default WorkDirections;
