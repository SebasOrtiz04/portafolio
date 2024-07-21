'use client'

import { Title1 } from '@/components/utils/titles';
import {Box, Container, Grid, Typography, Card, CardContent, CardActions} from '@mui/material';
import styles from './styles.module.css'
import { homeStyles } from '@/app/styles/homeStyles';
import { GoogleCalendarButton, WhatsAppIconButton } from '@/components/utils/buttons';
import { useTheme } from '@emotion/react';

const {gridItem, container, gridCard, gridCardActions} = homeStyles;

export function VideoPaneo() {

    const theme = useTheme();

    return (
        <Box sx={{...container,backgroundColor: theme.palette.secondary.light}}>

            <Container>
            <Title1 title='Conoce nuestras instalaciones.'/>

            <Grid container spacing={{xs: 2, md:5}} sx={{width:'100%'}}>
                <Grid item xs={12} md={6} sx={gridItem}>

                    <video 
                    width="320" 
                    height="240" 
                    className={styles.video} 
                    controls 
                    autoPlay 
                    loop 
                    preload="auto"
                    >
                        <source 
                        src="/videos/salon/paneo_dercha_salon.mp4" 
                        type="video/mp4" />
                        <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="es"
                        label="Español"
                        />
                        Tu navegador no soporta el video Tag.
                    </video>

                </Grid>
                <Grid item xs={12} md={6} sx={gridItem}>

                    <Card sx={gridCard}>
                        <CardContent>
                            <Typography variant='h6'>
                                Disfruta de tu evento en un ambiente acojedor, ideal para todo tipo de reuniones y fiestas
                                contamos luces para ambientar la ocación. 
                            </Typography>
                        </CardContent>
                        <CardActions sx={gridCardActions}>
                            <GoogleCalendarButton/>
                            <WhatsAppIconButton/>
                        </CardActions>
                    </Card>
   
                </Grid>
            </Grid>
            
            </Container>
        </Box> 
    )
  }