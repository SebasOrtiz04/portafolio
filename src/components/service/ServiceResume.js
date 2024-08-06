import { Avatar, Box, Chip, Divider, Grid, ImageList, ImageListItem, Paper, Skeleton, Stack, Typography, useTheme } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import PaidIcon from '@mui/icons-material/Paid';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { ServicesResumeLoader } from "../utils/loaders";
import { useSelector } from "react-redux";


const cookEvent = event => [...attributes.filter(el => el.key)
  .map( el => ({...el,value:event[el.key]}))
  .filter(el => el.value), ...attributes.filter(el => el.value)]


export default function ServiceResume() {

  const {socialEventById,isLoading} = useSelector(state => state.socialEvent)
  
  return (
    <Stack margin={3} width={{xs:'90%',lg:'40%'}}>
    <Typography variant="h4">
      {
        isLoading.getById || !socialEventById._id 
        ? <Skeleton variant="text" width={120} height={48}/>
        : socialEventById.eventName
        }
    </Typography>

      {
        isLoading.getById || !socialEventById._id 

        ? <ServicesResumeLoader/>
        : <Grid container xs={12}>
          {
            cookEvent(socialEventById).map(({icon,label,value, sufix = '', prefix = ''},index)=>(
              <Grid item xs={6} sm={4} lg={6}>
                  <Paper key={index} elevation={1}  
                      sx={{
                          padding:1,margin:1, display:'flex',
                          alignItems:'center', justifyContent:'space-evenly'
                      }}
                  >
                  <Box sx={{width:50, display:'flex', justifyContent:'center'}}>
                      {icon}
                  </Box>
  
                  <Divider  orientation="vertical" 
                  variant="fullWidth" flexItem  
                  />
  
                  <Stack alignItems={'center'} justifyContent={'center'} gap={0.5} minWidth={80}>
                      <Typography variant="h6">
                      {`${prefix}${value}${sufix}`}
                      </Typography>
                      <Divider variant="fullWidth" flexItem/>
                      <Typography variant="caption" sx={{margin:0.5}}>
                      {label}
                      </Typography>
                  </Stack>
                  
                  </Paper>
              </Grid>
            ))}
          </Grid>
      }

        {/* <Stack direction={'row'} gap={1}>
            {
                chips.map((el,key) => (
                <Chip 
                key={key}
                avatar={
                    <Avatar sx={{backgroundColor:'transparent'}}>
                    <StarIcon color="secondary" />
                    </Avatar>
                }
                variant="outlined" 
                label={el} 
                />
                ))
            }
        </Stack> */}
      </Stack>    
  )
}

const chips = [
    'Salón Jarín',
    'Alimentos',
    'Meseros'
  ]
  
  const attributes = [
    {
      key:'price',
      icon:<PaidIcon/>,
      label:'Precio.',
      prefix:'$',
      cook: price => price.toFixed(2)
    },
    {
      key:'pricePerPeople',
      icon:<PaidIcon/>,
      label:'Precio por persona.',
      prefix:'$',
      cook: price => price.toFixed(2)
    },
    {
      key:'people',
      icon:<GroupsIcon/>,
      label:'Personas.'
    },
    {
      key:'minPeople',
      icon:<PersonRemoveAlt1Icon/>,
      label:'Min. Personas.'
    },
    {
        key:'maxPeople',
        label:'Max. Personas',
        icon:<PersonAddAlt1Icon/>,
    },
    {
      value:7,
      icon:<AccessTimeFilledIcon/>,
      label:'Duración',
      sufix:'hrs'
    },
    {
      value:30,
      icon:<AccessTimeFilledIcon/>,
      label:'Recepción',
      sufix:'min'
    },
  ]
