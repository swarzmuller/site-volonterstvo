import {Stack, Typography} from "@mui/material";
import {useTranslations} from "next-intl";

const HeaderHowDoWeHelp = () => {
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
