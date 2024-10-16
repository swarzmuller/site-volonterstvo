import { Fragment } from "react";
import { Box, ButtonBase } from "@mui/material";
import { menuItems } from "./helpers";
import * as S from "./styles";

const Menu = () => {
  return (
    <Box sx={{...S.Menu}}>
      {menuItems.map((item) => {
        return (
          <Fragment key={item.id}>
            <ButtonBase sx={{...S.MenuItem}}>{item.menuItem}</ButtonBase>
            {/* <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu> */}
          </Fragment>
        );
      })}
    </Box>
  );
};

export default Menu;
