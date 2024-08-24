import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import styles from './styles.module.css'
import { useTheme } from '@mui/material/styles';
import { footerStyles } from '@/app/styles/layoutStyles';
import { rootLayoutStyles } from '@/app/styles/mainStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
const {flexcol} = rootLayoutStyles;
const {footer} = footerStyles;

export default function Footer() {

  const theme = useTheme();
  
  return (

      <Box  sx={flexcol}>

        <Box component="footer" sx={{...footer,backgroundColor: theme.palette.blackMask.dark}}
        >
          
          <Container maxWidth="sm">
            <Typography 
            variant="body1"
            color={'secondary'}
            sx={{color:theme.palette.secondary.light,display:'flex',gap:1}}
            >
              Made with <FavoriteIcon color='error'/> by Juan Sebastian Ortiz Castro
            </Typography>
          </Container>
        </Box>
      </Box>

  );
}