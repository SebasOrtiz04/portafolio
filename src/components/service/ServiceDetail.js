import { Box, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'
import ItemCard from '../vendedor/itemCard'
import { cardsList } from '@/lib/data/initialStates/vendedor'
import { useSelector } from 'react-redux'

export default function ServiceDetail() {
  const {socialEventById,isLoading} = useSelector(state => state.socialEvent)
  return (
    <Box>
        <Typography sx={{marginY:2, textAlign:'justify'}}>
          {
            isLoading.getById || !socialEventById.eventDescription 
            ? [...Array(5)].map( (_,i) => <Skeleton key={i} variant='text' width={{xs:'100%',lg:500}}/>)
            : socialEventById.eventDescription 
          }
        </Typography>
        {/* <Stack>
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
        </Stack> */}
    </Box>
  )
}
