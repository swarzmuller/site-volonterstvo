import { Box } from '@mui/material';

export const metadata = {
  title: "Dashboard page",
  description: "test ))",
};

const Layout = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  );
}

export default Layout;
