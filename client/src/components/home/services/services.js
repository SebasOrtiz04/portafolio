import React from 'react'
import {Container, Stack} from '@mui/material'
import { Title1 } from '@/components/utils/titles'
import { servicesInitialState } from '@/lib/data/initialStates/services'
import ServicesCard from '@/components/cards/serviceCard/serviceCard'

export default function Services() {
  return (
    <Container sx={{width:'100vw'}}>
      <Title1 title='Nuestros Servicios'/>

      <Stack margin="3rem" direction="row" useFlexGap flexWrap="wrap" spacing={5} width={'100%'} justifyContent={'center'}>
        {
            servicesInitialState.map(({serviceTitle,serviceDescription,imagePath},key) =>(
                <ServicesCard
                key={key}
                serviceTitle={serviceTitle}
                serviceDescription={serviceDescription}
                imagePath={imagePath}
                />
            ))
        }
      </Stack>
      
    </Container>
  )
}
