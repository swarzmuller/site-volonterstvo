'use client';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { useContext, useState } from 'react';
import LandContext from '@/src/context/LocaleContext/LocaleContext';
import styles from '@/src/app/page.module.scss';

const Header = () => {
  const {locale, toggleLocale} = useContext(LandContext);
  const [userLocale, setUserLocale] = useState(locale)

  const handleChange = (event) => {
    const lang = event.target.value;
    setUserLocale(lang);
    toggleLocale(lang);
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
        >
          <MenuItem value={'en'}>ENG</MenuItem>
          <MenuItem value={'ua'}>UKR</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
};

export default Header;
