import Link from "next/link";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { IMenu } from "../../types";
import * as S from "../../styles";

const SubMenu = ({
  subMenuItems,
  image,
}: Pick<IMenu, "subMenuItems" | "image">) => {
  const locale = useLocale();
  return (
    <Box sx={S.SubMenu}>
      <Box sx={S.SubMenuInfo}>
        <Image src={image} width={282} height={121} alt="Image" />
        <Typography>
          Текст спраямований на допомогу дітям. <br />
          Текст спраямований на допомогу дітям.
          <Link href={`${locale}test`}>Допомогти дітям</Link>
        </Typography>
      </Box>
      <Box sx={S.SubMenuList}>
        {subMenuItems?.map((item) => {
          return (
            <Link key={item.linkText} href={`${locale}${item.link}`}>
              <Image src={item.icon} width={18} height={18} alt="Icon" />
              <Typography>{item.linkText}</Typography>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default SubMenu;
