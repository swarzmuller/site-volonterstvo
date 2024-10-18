import { useState } from "react";
import { Box, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import Arrow from "@/public/icons/arrow.svg";
import { menuItems } from "./helpers";
import SubMenu from "./components/SubMenu/SubMenu";
import * as S from "./styles";

const Menu = () => {
  const [open, setOpen] = useState<number | null>(null);
  const locale = useLocale();

  const handleMouseEnter = (id: number | null) => {
    setOpen(id);
  };

  const handleMouseLeave = () => {
    setOpen(null); // Reset the open state when the mouse leaves
  };

  return (
    <Box sx={{ ...S.Menu }}>
      {menuItems.map((item) => {
        const isSubmenu = open === item.id && item.subMenuItems;
        return (
          <Box
            sx={S.MenuItem}
            key={item.id}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <ButtonBase>
              {item.subMenuItems ? (
                <>
                  {item.menuItem}
                  <Image
                    src={Arrow.src}
                    width="14"
                    height="8"
                    alt="Arrow"
                    className={isSubmenu ? "imageRotate" : ""}
                  />
                </>
              ) : (
                <Link href={`${[locale]}${item.link}`}>{item.menuItem}</Link>
              )}
            </ButtonBase>
            {isSubmenu ? (
              <SubMenu subMenuItems={item.subMenuItems} image={item.image} />
            ) : null}
          </Box>
        );
      })}
    </Box>
  );
};

export default Menu;
