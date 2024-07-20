import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import styles from './styles.module.css'
import { useTheme } from '@mui/material/styles';
import { rootLayoutStyles } from '@/app/styles/mainStyles';
import { footerStyles } from '@/app/styles/layoutStyles';

const {flexcol} = rootLayoutStyles;
const {footer} = footerStyles;

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" >
      {'Copyright © '}
      <Link color="secondary" href="https://mui.com/">
        Orca Eventos Sociales
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Footer() {

  const theme = useTheme();
  
  return (

      <Box  sx={flexcol}>

        <Box component="footer" sx={{...footer,backgroundColor: theme.palette.primary.main}}
        >
          <Container maxWidth="sm">
            <Typography 
            variant="body1"
            color={'secondary'}
            >
              Orca Eventos Sociales.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>

  );
}