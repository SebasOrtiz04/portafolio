'use client'

import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FlareIcon from '@mui/icons-material/Flare';
import SchoolIcon from '@mui/icons-material/School';
import { Container, Grow, Paper, Stack, Typography, useTheme, Zoom } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import { Title2 } from '../utils/titles';

export default function About() {
  
  const theme = useTheme();
  const router = useRouter()

  const textColor = theme.palette.secondary.light;

  const {ref, inView} = useInView({
        threshold:0.3,
        triggerOnce:true
  })

    const skills = [
        {
            label:'Autodidacta',
            icon:<SchoolIcon sx={{color:textColor}} />
        },
        {
            label:'Propositivo',
            icon:<FlareIcon sx={{color:textColor}} />
        },
        {
            label:'Creativo',
            icon:<EmojiObjectsIcon sx={{color:textColor}} />
        },
    ]
    
    return (
        <Container >
            <Stack gap={10} sx={{marginBottom:0}}>
                <Title2 title={'Un poco sobre mi'}/>

                <Grow in={inView}>
                    <Typography ref={ref} sx={{color:textColor,textAlign:'justify',textIndent:20}} >
                            Soy un ingeniero en electrónica del  Instituto Tecnológico de Puebla amante de la programación, 
                        mi formación me ha dado oportunidad de explorar la programación en diversos ámbitos,
                        desde controlar brazos robóticos, sensar cualidades del ámbiente mediante sensores para sistemas de control o monitoreo, conectar por antenas
                        un satélite cansat, desarrollo de sitios web, CRM's ERP's y el uso e integración de varias diciplinas anteriormente mencionadas en algunos proyectos.
                    </Typography>
                </Grow>

                <Stack width={'100%'} height={500} direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
                    {
                        skills.map(({label,icon},key)=>(
                            <Zoom
                            in={inView}
                            style={{transitionDelay: `${(key*300)}ms`}}
                            >
                                <Paper key={key} elevation={10} sx={{padding:2,width:'20%',gap:2,display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:theme.palette.blackMask.main, justifyContent:'space-between'}}>
                                    {icon}
                                    <Typography variant='h6' sx={{color:textColor}}>
                                        {label}
                                    </Typography>
                                </Paper>
                            </Zoom>
                        ))
                    }
                </Stack>
            </Stack>

        </Container>
  )
}
