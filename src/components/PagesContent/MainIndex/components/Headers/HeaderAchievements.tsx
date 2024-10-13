import {Stack, Typography, useTheme} from "@mui/material";
import {useTranslations} from "next-intl";
import Splitter, {LOCATION} from "@/src/components/PagesContent/shared/Splitter/Splitter";

const HeaderAchievements = () => {
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
          {t("ourAchievements.our")}
        </Typography>
        &emsp;&emsp;
        <Typography
          variant="h2"
          fontWeight="bold"
        >
          {t("ourAchievements.achievements")}
        </Typography>
        &emsp;&emsp;
        <Typography
          variant="h2"
        >
          {t("ourAchievements.forToday")}
        </Typography>
      </Stack>
      <Splitter
        position={LOCATION.left}
        color={palette.divider}
      />
    </>
  );
};

export default HeaderAchievements;
