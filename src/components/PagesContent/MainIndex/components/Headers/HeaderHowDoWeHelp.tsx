import {Stack, Typography, useTheme} from "@mui/material";
import {useTranslations} from "next-intl";
import Splitter, {LOCATION} from "@/src/components/PagesContent/shared/Splitter/Splitter";

const HeaderHowDoWeHelp = () => {
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
          {t("howDoWeHelp.how")}
        </Typography>
        &emsp;&emsp;
        <Typography
          variant="h2"
          fontWeight="bold"
        >
          {t("howDoWeHelp.we")}
        </Typography>
        &emsp;&emsp;
        <Typography
          variant="h2"
        >
          {t("howDoWeHelp.help")}
        </Typography>
      </Stack>
    </>
  );
};

export default HeaderHowDoWeHelp;
