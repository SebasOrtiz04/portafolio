'use client'

import { Avatar, Box, Button, Container, Grid, Grow, Typography, useTheme, Zoom } from '@mui/material'
import styles from './styles.module.css'
import Image from 'next/image';
import TypewriterEffect from '../utils/typeWritinfefect';
import { heroTypographyText } from '@/lib/data/initialStates';
import { headerStyles } from '@/app/styles/homeStyles';

const {subTitleStyle,gridContainerStyle,avatarGridStyle,typographyText,textStyle,titleStyle,avatarStyle} = headerStyles;
export default function Hero() {
  
    const theme = useTheme();

    return (

      <Container sx={{height:'100vh',display:'flex',alignItems:'center'}}>
        <Grid container sx={gridContainerStyle} alignItems={'center'}>
            <Grid item xs={12} sm={6} sx={avatarGridStyle}>
                <Grow timeout={400} in={true}>
                    <Avatar sx={avatarStyle}>
                        <Image
                            src={'/img/Profile/profile.jpg'}
                            height={300}
                            width={200}
                            alt='Foto de Perfil'
                            aria-label='foto de perfil'
                            className={styles.avatar}
                            // sx={{height:{xs:100,sm:300},width:{xs:100,sm:300}}}
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
                <Button
                            fullWidth
                            variant="outlined"
                            color="primary"
                            component="a"
                            href="/docs/CV Juan Sebastian Ortiz Castro.pdf" // Ruta al archivo estático
                            download="CV Juan Sebastian Ortiz Castro.pdf" // Nombre con el que se descargará el archivo
                            >
                            Descarga mi CV
                        </Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={textStyle}>
                <TypewriterEffect
                variant='lead' customStyles={{...typographyText,color:theme.palette.secondary.light}} strings={heroTypographyText}/>
            </Grid>
        </Grid>
      </Container>
  )
}
