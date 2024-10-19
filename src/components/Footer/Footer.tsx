'use client';
import { Box, Typography, List, ListItem, Button } from '@mui/material';
import * as styles from './styles';
import Image from 'next/image';
import Instagram from "@/public/images/footer/Instagram.png";
import Facebook from "@/public/images/footer/Facebook.png";
import X from "@/public/images/footer/X.png";
import Linkedin from "@/public/images/footer/Linkedin.png";
import Logo from '@/public/images/footer/Logo.png'

const Footer = () => {
  return (
    <>
      <Box
        sx={styles.FooterMainBox}
      >
        <Box
          sx={styles.FooterDescriptionBox}
        >
          <Box>
            <Image
              src={Logo}
              width={119.91}
              height={28}
              alt="Logo"
            />
            <p>Charity lab foundation - це благодійна організація, метою бороотьби з голодом серед Українців</p>
          </Box>
          <Box>
            <Typography
              variant='h6'
            >
              Про нас
            </Typography>
            <Typography
              variant='body2'
            >
              <List>
                <ListItem>
                  Про наш фонд
                </ListItem>
                <ListItem>
                  Команда
                </ListItem>
                <ListItem>
                  Платформа Charity Hero
                </ListItem>
                <ListItem>
                  Банк їжі
                </ListItem>
                <ListItem>
                  Банк гігієни
                </ListItem>
                <ListItem>
                  Їжа для тваринок
                </ListItem>
              </List>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant='h6'
            >
              Партнерам
            </Typography>
            <Typography
              variant='body2'
            >
              <List>
                <ListItem>
                  Некомерційним організаціям
                </ListItem>
                <ListItem>
                  Рітейлу
                </ListItem>
                <ListItem>
                  IT Компаніям
                </ListItem>
              </List>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant='h6'
            >
              Юридична інформація
            </Typography>
            <Typography
              variant='body2'
            >
              <List>
                <ListItem>
                  Документи
                </ListItem>
                <ListItem>
                  Звітність
                </ListItem>
                <ListItem>
                  Умови використання
                </ListItem>
                <ListItem>
                  Політика Конфіденційності
                </ListItem>
              </List>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant='h6'
            >
              Контакти
            </Typography>
            <Typography
              variant='body2'
            >
              <List>
                <ListItem>
                  м.Київ,вул. Вулиця 34
                </ListItem>
                <ListItem>
                  +380675438976
                </ListItem>
                <ListItem>
                  charityhero@gmail.com
                </ListItem>

                <Box>
                  <ListItem>
                    Ми у соціальних мережах
                  </ListItem>
                  <Image
                    src={Instagram}
                    width={27.26}
                    height={27.26}
                    alt="Instagram"
                  />
                  <Image
                    src={Linkedin}
                    width={27.26}
                    height={27.26}
                    alt="Linkedin"
                  />
                  <Image
                    src={X}
                    width={27.26}
                    height={27.26}
                    alt="X"
                  />
                  <Image
                    src={Facebook}
                    width={27.26}
                    height={27.26}
                    alt="Facebook"
                  />
                </Box>
              </List>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={styles.FooterBtnBox}
        >
          <Box>
            <Typography
              variant='h6'
              sx={{
                display: 'inline',
              }}
            >
              Хочеш долучитися в команду Charity Lab?
            </Typography>
            <Button
              variant='contained'
              onClick={() => {
                alert('Click')
              }}
            >
              Тицяй</Button>
          </Box>
          <Box>
            <Typography
              variant='h6'
              sx={{
                display: 'inline',
              }}
            >
              Маєш ідеї для Співпраці?
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                alert('Write us')
              }}
            >Напиши нам</Button>
          </Box>
        </Box>

        <Box
          sx={styles.FooterRightsQuoteBox}
        >
          <Typography variant='body2'>
            © Charity lab foundation 2024. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
