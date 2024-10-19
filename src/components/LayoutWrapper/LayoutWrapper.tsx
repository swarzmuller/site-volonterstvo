'use client'

import styled from "@emotion/styled";
import { Box } from "@mui/material";

const LayoutWrapper = styled(Box)`
  width: 100%;
  max-width: 1440px;
  padding: 0 85px;
  margin: 0 auto;

  * {
    box-sizing: border-box;
  }
`;

export default LayoutWrapper;
