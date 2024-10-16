'use client';
import { Box, Typography, List, ListItem, Button } from '@mui/material';
import * as footerStyles from './footerStyles';

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
            <p>Charity lab foundation</p>
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
                <ListItem>
                  Ми у соціальних мережах
                </ListItem>
                <ListItem>
                  Банг гігієни
                </ListItem>
                <ListItem>
                  Їжа для тваринок
                </ListItem>
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
              display: 'inline',
            }}
            >

              Хочеш долучитися в команду Charity Lab?
            </Typography>
            <Button variant="contained">Тицяй</Button>
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
            <Button variant="contained">Напиши нам</Button>
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
