'use client'

import { useTheme } from '@emotion/react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Image from 'next/image'
import styles from './styles.module.css';
import { cardsList } from '@/lib/data/initialStates/vendedor'
import ItemCard from './itemCard'

export default function VendedorHero() {
  
    const theme = useTheme();

  return (
    <Box sx={{overflow:'hidden'}}>
      
      <Stack alignItems={'center'} sx={{paddingBottom:5,width:'100%',background:theme.palette.primary.main,}}>
        <Image
            srcSet='/img/Logos/logoC.png'
            src='/img/Logos/logoC.png'
            alt='Logo Orca Eventos Sociales'
            priority
            width={200}
            height={200}
        />
        <Typography variant='h4' className={styles.title}>
            Información para ventas
        </Typography>
      </Stack>
      <Container>
        <Stack>
            {
                cardsList.map(({title,subtitle,list},key) =>(
                    <ItemCard
                    key={key}
                    title={title}
                    list={list}
                    subtitle={subtitle}
                    />
                ))
            }
        </Stack>
      </Container>


    </Box>
  )
}
