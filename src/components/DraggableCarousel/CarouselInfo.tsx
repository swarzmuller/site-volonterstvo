"use client";
import { Box, ButtonBase, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "@/public/images/slider/arrow-left.png";
import ArrowRight from "@/public/images/slider/arrow-right.png";
import { CARDS_LENGHT, NEXT_DIRECTION, PREV_DIRECTION } from "./helpers";
import { CarouselInfoProps } from "./types";
import * as S from "./styles";

const CarouselInfo = ({
  currentEl,
  children,
  direction,
  currentSlide,
  formatedNumber,
  formatedCardsNumber,
  locale,
}: CarouselInfoProps) => {
  const t = useTranslations("HomePage");

  return (
    <Box sx={{ ...S.InfoWrapper }}>
      <Box>
        <Typography
          variant="body2"
          sx={{
            ...S.SliderSubTitle,
          }}
        >
          {t(currentSlide.subtitle)}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            ...S.SliderTitle,
          }}
        >
          {t(currentSlide.title)}
        </Typography>
        <Link
          style={{ textDecoration: "none" }}
          key={"/about-us"}
          href={`${locale}${currentSlide.link}`}
        >
          <Typography sx={{ ...S.JoinButton }} variant="h5">
            {t("slider.join")}
          </Typography>
        </Link>
      </Box>
      <Box sx={{ ...S.SwitchSlider }}>
        <ButtonBase
          sx={{ ...S.ControlButton }}
          disabled={currentEl === CARDS_LENGHT}
          onClick={() => direction(PREV_DIRECTION)}
        >
          <Image src={ArrowLeft.src} width={7} height={12} alt="Arrow Left" />
        </ButtonBase>
        <Box sx={{...S.ProgressWrapper}}>
          <Typography variant="body2">{formatedNumber}</Typography>
          {children}
          <Typography variant="body2">{formatedCardsNumber}</Typography>
        </Box>
        <ButtonBase
          sx={{ ...S.ControlButton }}
          onClick={() => direction(NEXT_DIRECTION)}
        >
          <Image src={ArrowRight.src} width={7} height={12} alt="Arrow Right" />
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default CarouselInfo;
