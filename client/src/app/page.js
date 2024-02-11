import Carrucel from '@/components/home/rootCarrucel/rootCarrucel';
import Services from '@/components/home/services/services';
import React from 'react'
import {Box} from '@mui/material'

export const metadata = {
  title: "Orca Eventos Sociales",
  description: "Sitio web de del saón de eventos sociales, fiestas de cumpleaños, fiesta de cumpleaños, XV años, bodas, banquetes",
};

export default function Home() {
  
  return (
    <Box sx={{maxWidth:'100vw',overflowX:'hidden'}}>
      <Carrucel/>

      <Services/>
    </Box>
  )
}
