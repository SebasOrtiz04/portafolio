'use client'

import { devIcons } from "@/lib/data/devIcons";
import { chips, projects } from "@/lib/data/initialStates";
import { cookProjects } from "@/lib/helpers";
import { useTheme } from "@emotion/react";
import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Grid, Stack, Typography, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function GridProjects() {

    const theme = useTheme();

    const textColor = theme.palette.secondary.light;

    const [selected , setSelected ] = useState('');
    const [projectsToRender , setProjectsToRender ] = useState(projects);
    const [page, setPage] = useState(1);

    const {ref, inView} = useInView({
        threshold:0.2,
        triggerOnce:true
    })

    const handleChip = key => setSelected(key);

    useEffect(()=>{
        let fullList = [...projects];
        if(selected)
            fullList = cookProjects(fullList, selected);
       setProjectsToRender(fullList)
    },[selected])

    

  return (
    <Box ref={ref} >

        <Zoom in={inView} timeout={500}>
            <Stack direction='row' gap={2} marginY={5}>
                {
                    chips.map(({label,key})=>(
                        <Chip 
                        key={key} 
                        size="large"
                        variant={ key != selected ? 'outlined' : 'filled'}
                        color={ key != selected ?'secondary' : 'primary'}  
                        label={label} 
                        sx={{color:textColor}} 
                        onClick={() => handleChip(key)}
                        />
                    ))
                }
                { 
                    selected 
                    &&  
                    <Chip 
                    size="large"
                    variant='outlined' 
                    color='secondary'  
                    label='Borrar Filtro'
                    sx={{color:textColor}} 
                    onClick={() => handleChip('')}
                    />
                }
            </Stack>
        </Zoom>
        <Box sx={{ minHeight: '100vh', transition: 'min-height 0.3s ease-in-out' }}>

        <Grid container sx={{marginY:10}}  >
                {
                    projectsToRender.map(({srcImg,altImg,title,role,year,url,registers,owner,tecnologies},key)=>(
                        
                        <Zoom
                        in={inView}
                        style={{transitionDelay: `${(key*300)}ms`}}
                        >
                            <Grid item xs={12} sm={6} >
                                <Card sx={{margin:2,backgroundColor:theme.palette.blackMask.main}}>
                                    <CardActionArea
                                    component="a"
                                    href={url} // Enlace que se abrirá en una nueva pestaña
                                    target="_blank" // Abre en una nueva pestaña
                                    rel="noopener noreferrer" 
                                    >
                                        <CardMedia
                                        component='img'
                                        height={250}
                                        image={srcImg}
                                        alt={altImg}
                                        />
                                        <CardHeader 
                                        titleTypographyProps={{color:textColor}}
                                        subheaderTypographyProps={{color:textColor}}
                                        title={title}
                                        subheader={owner}
                                        />
                                        <CardContent>
                                            <Chip variant='outlined' color='secondary'  label={role} sx={{color:textColor}} />
                                            <Typography sx={{fontWeight:'bold',fontSize:24,margin:1}} color={'secondary'}>
                                                {year}
                                            </Typography>
                                            <Stack marginY={2}>
                                                {
                                                    registers.length > 0 && registers.map(({label,count},index)=>(
                                                        <Typography sx={{color:textColor,fontSize:22,fontWeight:'bold'}} key={`${index}${key}`}>
                                                            + de <CountUp   start={inView} end={count} duration={count/3000} /> {label}
                                                        </Typography>
                                                    ))
                                                }
                                            </Stack>
                                            <Stack direction={'row'} alignItems={'center'} gap={2} useFlexGap flexWrap={'wrap'}>
                                                {
                                                    tecnologies.map((tecnologie,index)=>(
                                                        <Stack alignItems={'center'} key={`${index}${key}`}>
                                                            <Typography sx={{color:textColor}}>
                                                                {devIcons[tecnologie]}
                                                            </Typography>
                                                            <Typography variant="caption" key={`${index}${key}`} sx={{color:textColor}}>
                                                                {tecnologie.toUpperCase()}
                                                            </Typography>
                                                        </Stack>
                                                    ))
                                                }
                                            </Stack>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Zoom>
                    ))
                }
        </Grid>
        </Box>
    </Box>
  )
}
