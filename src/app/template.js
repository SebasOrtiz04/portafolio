'use client';

import { Box, useTheme } from '@mui/material'
import styles from './styles.module.css'

export default function Template({children}) {
    const theme = useTheme();
  return (
    <Box sx={{position:'relative',backgroundColor:theme.palette.blackMask.dark,minHeight:'100vh',overflow:'hidden'}} > 
      <div className={styles.ball1} />
      <div className={styles.ball2} />
      {children}
    </Box>
  )
}
