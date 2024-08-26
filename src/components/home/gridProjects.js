'use client'

import { devIcons } from "@/lib/data/devIcons";
import { projects } from "@/lib/data/initialStates";
import { useTheme } from "@emotion/react";
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Grid, Stack, Typography, Zoom } from "@mui/material";
import { useRouter } from "next/router";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function GridProjects() {

    const theme = useTheme();
    // const router = useRouter()

    const textColor = theme.palette.secondary.light;

    const {ref, inView} = useInView({
        threshold:0.2
    })
  return (
        <Grid ref={ref} container sx={{minWidth:5,minHeight:5}}  >
                {
                    projects.map(({srcImg,altImg,title,role,year,url,registers,owner,tecnologies},key)=>(
                        
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
                                                        <Typography key={`${index}${key}`} sx={{color:textColor}}>
                                                            {devIcons[tecnologie]}
                                                        </Typography>
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
  )
}
