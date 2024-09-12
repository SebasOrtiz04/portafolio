'use client'

import {Typography, Divider, useTheme, Zoom} from '@mui/material'
import { useInView } from 'react-intersection-observer';

export const Title1 = ({title}) =>{

    const theme = useTheme();

    const {ref, inView} = useInView({
        threshold: 0.3,
        triggerOnce:true
    });

    return(
        <Zoom in={inView}>
            <Typography ref={ref} color={'secoandry'} variant='h3' sx={{color:theme.palette.secondary.light,fontSize:{xs:36,sm:'auto',textIndent:20}}}>
                {title}
                <Divider sx={{borderColor:theme.palette.secondary.light}} />
            </Typography>
        </Zoom>
    )
}

export const Title2 = ({title,}) =>{

    const theme = useTheme();

    const {ref, inView} = useInView({
        threshold: 0.3,
        triggerOnce:true
    });

    return(
        <Zoom in={inView} timeout={400}>
            <Typography ref={ref} color={'secoandry'} variant='h3' sx={{color:theme.palette.secondary.light,fontSize:{xs:36,sm:'auto',textIndent:20}}}>
                {title}
            </Typography>
        </Zoom>
    )
}
