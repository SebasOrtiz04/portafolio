'use client'

import { Avatar, Box, Container, Grid, Grow, Typography, useTheme, Zoom } from '@mui/material'
import styles from './styles.module.css'
import Image from 'next/image';
import TypewriterEffect from '../utils/typeWritinfefect';
import { heroTypographyText } from '@/lib/data/initialStates';
import { headerStyles } from '@/app/styles/homeStyles';

const {subTitleStyle,gridContainerStyle,avatarGridStyle,textStyle,titleStyle,avatarStyle} = headerStyles;
export default function Hero() {
  
    const theme = useTheme();

    return (
    <Box sx={{position:'relative',backgroundColor:theme.palette.blackMask.dark,height:'100vh',overflow:'hidden'}} >
      <div className={styles.ball1} />
      <div className={styles.ball2} />

      <Container>
        <Grid container sx={gridContainerStyle} alignItems={'center'}>
            <Grid item xs={12} md={6} sx={avatarGridStyle}>
                <Grow timeout={400} in={true}>
                    <Avatar sx={avatarStyle}>
                        <Image
                        src={'/img/Profile/profile.jpeg'}
                        height={300}
                        width={300}
                        alt='Foto de Perfil'
                        aria-label='foto de perfil'
                        />
                    </Avatar>
                </Grow>
                <Zoom in={true} timeout={500}>
                    <Typography variant='h1' sx={{...titleStyle,color:theme.palette.secondary.light}}>
                        Juan Sebastian Ortiz
                    </Typography>
                </Zoom>
                <Zoom in={true} timeout={700}>
                    <Typography variant='h2' sx={{...subTitleStyle,color:theme.palette.secondary.dark}}>
                        Ingeniero en electrónica
                    </Typography>
                </Zoom>
            </Grid>
            <Grid item xs={12} md={6} sx={textStyle}>
                <TypewriterEffect
                variant='lead' customStyles={{fontSize:36,color:theme.palette.secondary.light}} strings={heroTypographyText}/>
            </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
