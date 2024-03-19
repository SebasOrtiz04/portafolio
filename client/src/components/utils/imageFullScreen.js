'use client'

import { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import {
  Stack,
  Button,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  AppBar,
  Typography 
} from '@mui/material'
import {useSelector, useDispatch} from 'react-redux';
import { CloseImage, SelectImage } from '@/redux/actions/FullImageActions';
import Image from 'next/image'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import styles from './styles.module.css';

export default function ImageFullScreen() {

  const dispatch = useDispatch();

  const {open,list,selected} = useSelector(state => state.fullImage)

  const handleNextImage = (index) => {
    const newIndex = index >= list.length - 1 ? 0 : selected + 1;
    dispatch(SelectImage(newIndex));
  }

  return (
    <Dialog  open={open} onClose={()=>dispatch(CloseImage())} maxWidth='xl' fullScreen>

        <DialogTitle>
          <AppBar sx={{padding:1}}>
            <Stack direction={'row'} gap={3}>
            <Button color='secondary' variant='outlined' startIcon={<ArrowCircleLeftIcon />} onClick={() => dispatch(CloseImage())}>
              cerrar
            </Button>
            <Typography variant='h5'>
            {list[selected]?.title}
            </Typography>
            </Stack>
          </AppBar>
        </DialogTitle>

        <DialogContent>

          <Stack alignItems={'center'} gap={5} justifyContent={'center'} height={'100%'}>

            {
              list.length &&

              <Stack direction={'row'} alignItems={'center'} gap={5} justifyContent={'center'} position={'relative'}>
                <IconButton  
                onClick={() => dispatch(SelectImage(selected - 1))} 
                disabled={selected <= 0}
                sx={{position:'absolute',left:5,zIndex:300}}
                >
                  <ArrowCircleLeftIcon color='secondary'/>
                </IconButton>

                <Stack 
                overflow={'hidden'} 
                alignItems={'center'} 
                alignContent={'center'} 
                sx={{maxHeight:{xs:'80vh',md:'60vh'}}}
                >
                  <Image
                    src={`${list[selected]?.img}`}
                    srcSet={ `${list[selected]?.img}`}
                    alt={list[selected]?.title}
                    loading="lazy"
                    width={300}
                    height={100}
                    className={styles.img}
                  />
                 

                </Stack>

                <IconButton 
                sx={{position:'absolute',right:5,zIndex:300}} 
                onClick={() => dispatch(SelectImage(selected + 1))} 
                disabled={selected >= list.length - 1}>
                  <ArrowCircleRightIcon color='secondary'/>
                </IconButton>

              </Stack>
              
            }

            <Box sx={{width:'min(900px, 95vw)',overflowX:'scroll',overflowY:'visible'}}>
              <Stack direction={'row'} gap={3} paddingY={2} alignItems={'center'}>
              {
                list.map(({img,title}, key)=>(

                  <Image
                  onClick={() => dispatch(SelectImage(key))}
                  key={key}
                    src={`${img}`}
                    srcSet={ `${img}`}
                    alt={title}
                    loading="lazy"
                    width={300}
                    height={100}
                    className={selected === key ? styles.img__selected : styles.img__list}
                  />
                ))
              }
              </Stack>
            </Box>

          </Stack>
        </DialogContent>



    </Dialog >
  )
}
