'use client';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import LandContext from '@/src/context/LocaleContext/LocaleContext';
import styles from '@/src/app/[locale]/page.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = ({locale}) => {
  const pathName = usePathname();

  const [locale1, toggleLocale] = useState(locale);
  // const {locale, toggleLocale} = useContext(LandContext);
  // const [userLocale, setUserLocale] = useState(locale)

  // const handleChange = (event) => {
  //   const lang = event.target.value;
  //   setUserLocale(lang);
  //   toggleLocale(lang);
  // }

  const handleChange = (event) => {
    const lang = event.target.value;
    toggleLocale(lang);

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
          value={locale1}
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
