import { devIcons } from "@/lib/data/devIcons";
import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, Grid, Stack, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ProjectCard({
    project:{
        title,
        srcImg,
        altImg,
        role,
        year,
        url,
        registers,
        owner,
        tecnologies,
    }
}) {

    const theme = useTheme();

    
    const {ref, inView} = useInView({
        threshold:0.2,
        triggerOnce:true
    })
    
    const textColor = theme.palette.secondary.light;
  return (
    <Box
        sx={{
          flex: '0 0 100%',
          minWidth: 0,
          p: 4,
          textAlign: 'center',
          borderRadius: 2,
        }}
    >
        <Card sx={{width:'95%', margin:'auto', height:'100%', backgroundColor:theme.palette.blackMask.main}}>
            <CardActionArea
            component="a"
            href={url} // Enlace que se abrirá en una nueva pestaña
            target="_blank" // Abre en una nueva pestaña
            rel="noopener noreferrer" 
            >
                <CardHeader title={title} titleTypographyProps={{color:textColor}} />

                <CardMedia
                component='img'
                height={250}
                image={srcImg}
                alt={altImg}
                sx={{display:{xs:'block',md:'none'}}}
                />
                <CardContent >
                    <Grid container columnGap={10} >
                        <Grid item xs={12} md={5} sx={{display:{xs:'none', md:'grid'}}} >
                            <img style={{width:'100%', margin:'auto'}} srcSet={srcImg} src={srcImg} alt={altImg} loading='lazy' />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Stack height={'100%'} justifyContent={'space-evenly'} alignItems={'center'} gap={2}>
                                <Chip variant='outlined' color='secondary'  label={role} sx={{color:textColor}} />
                                <Typography sx={{fontWeight:'bold',fontSize:24,margin:1}} color={'secondary'}>
                                    {year}
                                </Typography>
                                <Stack marginY={2}>
                                    {
                                        registers.length > 0 && registers.map(({label,count},index)=>(
                                            <Typography sx={{color:textColor,fontSize:22,fontWeight:'bold'}} key={index}>
                                                + de <CountUp   start={inView} end={count} duration={count/3000} /> {label}
                                            </Typography>
                                        ))
                                    }
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={2} width={'100%'} useFlexGap flexWrap={'wrap'}>
                                    {
                                        tecnologies.map((tecnologie,index)=>(
                                            <Stack alignItems={'center'} key={index}>
                                                <Typography sx={{color:textColor}}>
                                                    {devIcons[tecnologie]}
                                                </Typography>
                                                <Typography variant="caption" key={index} sx={{color:textColor}}>
                                                    {tecnologie.toUpperCase()}
                                                </Typography>
                                            </Stack>
                                        ))
                                    }
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    </Box>
  )
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        srcImg: PropTypes.string.isRequired,
        altImg: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        registers: PropTypes.array.isRequired,
        owner: PropTypes.string.isRequired,
        tecnologies: PropTypes.array.isRequired,
    }).isRequired,
}
