import {Stack, Typography, useTheme} from "@mui/material";
import {useTranslations} from "next-intl";
import Splitter, {LOCATION} from "@/src/components/PagesContent/shared/Splitter/Splitter";

const HeaderWorkDirections = () => {
  const {palette} = useTheme();
  const t = useTranslations('HomePage');
  return (
    <>
      <Stack
        direction="row"
        sx={{
          marginTop: '180px',
          marginBottom: '80px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h2"
        >
          {t("ourDirections.our")}
        </Typography>
        &emsp;&emsp;
        <Typography
          variant="h2"
          fontWeight="bold"
          color={palette.primary['900']}
        >
          {t("ourDirections.directions")}
        </Typography>
        &emsp;&emsp;
        <Typography
          variant="h2"
        >
          {t("ourDirections.ofWork")}
        </Typography>
      </Stack>
      <Splitter
        position={LOCATION.left}
        color={palette.divider}
      />
    </>
  );
};

export default HeaderWorkDirections;
