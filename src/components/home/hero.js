'use client'

import { Avatar, Box, Button, Container, Grid, Grow, Typography, useTheme, Zoom } from '@mui/material'
import styles from './styles.module.css'
import Image from 'next/image';
import TypewriterEffect from '../utils/typeWritinfefect';
import { heroTypographyText } from '@/lib/data/initialStates';
import { headerStyles } from '@/app/styles/homeStyles';
import { useInView } from 'react-intersection-observer';

const {subTitleStyle,gridContainerStyle,avatarGridStyle,typographyText,textStyle,titleStyle,avatarStyle} = headerStyles;
export default function Hero() {
  
    const theme = useTheme();

    const {ref, inView} = useInView({
                threshold:0.3,
        triggerOnce:true,
    })

    return (

      <Container ref={ref} sx={{height:'100vh',display:'flex',alignItems:'center'}}>
        <Grid container sx={gridContainerStyle} alignItems={'center'}>
            <Grid item xs={12} sm={6} sx={avatarGridStyle}>
                <Grow timeout={400} in={inView}>
                    <Avatar sx={avatarStyle}>
                        <Image
                            src={'/img/Profile/profile2.jpg'}
                            height={300}
                            width={200}
                            alt='Foto de Perfil'
                            aria-label='foto de perfil'
                            className={styles.avatar}
                            // sx={{height:{xs:100,sm:300},width:{xs:100,sm:300}}}
                        />
                    </Avatar>
                </Grow>
                <Zoom in={inView} timeout={500}>
                    <Typography variant='h1' sx={{...titleStyle,color:theme.palette.secondary.light}}>
                        Juan Sebastian Ortiz
                    </Typography>
                </Zoom>
                <Zoom in={inView} timeout={600}>
                    <Typography variant='h2' sx={{...subTitleStyle,color:theme.palette.secondary.dark}}>
                        Ingeniero en electrónica
                    </Typography>
                </Zoom>
                <Zoom in={inView} timeout={700}>
                <Button
                    variant="outlined"
                    color="secondary"
                    component="a"
                    href="/docs/CV Juan Sebastisan 2025 Abril.pdf" // Ruta al archivo estático
                    download="CV Juan Sebastisan 2025 Abril.pdf" // Nombre con el que se descargará el archivo
                >
                    Descarga mi CV
                </Button>

                </Zoom>
            </Grid>
            <Grid item xs={12} sm={6} sx={textStyle}>
                <TypewriterEffect
                    variant='lead' customStyles={{...typographyText,color:theme.palette.secondary.light}} strings={heroTypographyText}/>
            </Grid>
        </Grid>
      </Container>
  )
}
