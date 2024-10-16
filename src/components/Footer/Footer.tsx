'use client';
import { Box, Typography, List, ListItem, Button } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          height: '454.32px',
          backgroundColor: '#2C4893',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <p>Charity lab foundation</p>
          <p>Charity lab foundation - це благодійна організація, метою бороотьби з голодом серед Українців</p>
        </Box>
        <Box>
          <Typography
            variant='h5'
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
            variant='h5'
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
            variant='h5'
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
            variant='h5'
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



      <Box>
        <Box>
          <Typography variant='h5'>

          </Typography>
          <Button variant="contained">Contained</Button>
        </Box>
        <Box>
          <Typography variant='h5'>

          </Typography>
          <Button variant="contained">Contained</Button>
        </Box>
      </Box>




      <Box>
        <Typography variant='p'>
          Charity lab foundation 2024. All rights reserved.
        </Typography>
      </Box>
    </>
  )
};

export default Footer;
