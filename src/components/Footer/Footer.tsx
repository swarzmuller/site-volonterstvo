'use client';
import { Box, Typography, List, ListItem, Button } from '@mui/material';
import * as footerStyles from './footerStyles';
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
        sx={{...footerStyles.FooterMainBox}}
      >
        <Box
          sx={{...footerStyles.FooterDescriptionBox}}
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
              variant='p'
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
              variant='p'
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
              variant='p'
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
              variant='p'
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
        sx={{...footerStyles.FooterBtnBox}}
        >
          <Box>
            <Typography 
            variant='h6'
            sx={{
              display: 'block',
            }}
            >

              Хочеш долучитися в команду Charity Lab?
            </Typography>
            <button
            onClick={() => {
              alert('Click')
            }}
            >
              Тицяй</button>
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
        sx={{...footerStyles.FooterRightsQuoteBox}}
        >
          <Typography variant='p'>
            © Charity lab foundation 2024. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  )
};

export default Footer;
