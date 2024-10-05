'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import styles from '@/src/app/[locale]/page.module.scss';

const Header = ({locale}) => {
  const pathName = usePathname();
  const [userLocale, setUserLocale] = useState(locale);

  const handleChange = (event) => {
    const selectedLocale = event.target.value;
    setUserLocale(selectedLocale);

  };
  const redirectedPathName = (lang) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = lang;
    return segments.join("/");
  }

  return(
    <Box
      className={styles.siteWrapper}
      sx={{
        height: '200px',
        backgroundColor: 'green'
      }}
    >
      <FormControl>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userLocale}
          label="Age"
          onChange={handleChange}
          renderValue={(value) => <Typography>{value}</Typography>}
        >
          <MenuItem
            value={'en'}
          >
            <Link
              href={redirectedPathName('en')}>
              ENG
            </Link>
          </MenuItem>
          <MenuItem
            value={'ua'}
          >
            <Link
              href={redirectedPathName('ua')}>
              UKR
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
};

export default Header;
