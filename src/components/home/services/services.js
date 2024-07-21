'use client'

import React, { useEffect, useState } from 'react'
import {Container, Grid, Stack, Typography} from '@mui/material'
import { servicesInitialState } from '@/lib/data/initialStates/services'
import ServicesCard from '@/components/cards/serviceCard/serviceCard'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllSocialEvents } from '@/redux/actions/SocialEventActions'
import { ServicesLoaderCard } from '@/components/utils/loaders'

export default function Services() {

  const dispatch = useDispatch()

  const {allSocialEvents,isLoading} = useSelector(state => state.socialEvent)

  const [ready, setReady] = useState(false)

  useEffect(()=>{
    if(ready)return
    setReady(true)
    return () => setReady(false)
  },[])

  useEffect(()=>{
    if(!ready)return
    dispatch(GetAllSocialEvents())
  },[ready])
  console.log(allSocialEvents)
  return (
    <Container>      

      <Grid container sx={{marginY:8}}>
        {

            isLoading?.getAll || !allSocialEvents.length?
            [...Array(3)].map((_,key) =>(
              <Grid item xs={12} sm={6} md={4} key={key}>
                <ServicesLoaderCard />
              </Grid>
            )) :
            allSocialEvents.map(({eventName,eventDescription},key) =>(
              <Grid item xs={12} sm={6} md={4} >
                <ServicesCard
                key={key}
                serviceTitle={eventName}
                serviceDescription={eventDescription}
                imagePath={servicesInitialState[key].imagePath}
                />
              </Grid>
            ))
        }
      </Grid>
      
    </Container>
  )
}
