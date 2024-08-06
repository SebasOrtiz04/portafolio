import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { WhatsAppIconButton } from '@/components/utils/buttons';
import { Box, Divider, Grid, Paper, Skeleton, Stack } from '@mui/material';
import styles from './styles.module.css'

export const  ServicesLoaderCard = () => (
    <Card sx={{ margin: 3 }}>
      <Skeleton variant='rectangular' width={'100%'} height={140}/>
      <CardContent 
      sx={{position:'relative',height:'6rem',width:'90%',overflowY:'hidden',overflowX:'hidden'}}>
        
        <Box className={styles.mask}/>
        
        <Typography gutterBottom variant="h5" component="div">
        <Skeleton variant='text' width='100%' />
        </Typography>

        {
            [...Array(3)].map((_,key)=>(
                <Typography variant="body2" key={key}>
                    <Skeleton variant='text' width='100%' />
                </Typography>
            ))
        }

      </CardContent>
      <CardActions>
        <Skeleton variant='rounded' width='80%' height={48} />
        <Skeleton variant='circular' width={48} height={48}/>
      </CardActions>
    </Card>
)

export const ServicesResumeLoader = () =>(
  <Grid container xs={12}>
  {
    [...Array(6)].map((_,index)=>(
      <Grid item xs={6} sm={4} lg={6}>
          <Paper key={index} elevation={1}  
              sx={{
                  padding:1,margin:1, display:'flex',
                  alignItems:'center', justifyContent:'space-evenly'
              }}
          >
          <Box sx={{width:50, display:'flex', justifyContent:'center'}}>
            <Skeleton variant='circular' width={40} height={40} />
          </Box>

          <Divider  orientation="vertical" 
          variant="fullWidth" flexItem  
          />

          <Stack alignItems={'center'} justifyContent={'center'} gap={0.5} minWidth={80}>
              <Typography variant="h6">
                <Skeleton variant='text' width={60} />
              </Typography>
              <Divider variant="fullWidth" flexItem/>
              <Typography variant="caption" sx={{margin:0.5}}>
                <Skeleton variant='text' width={80} />
              </Typography>
          </Stack>
          
          </Paper>
      </Grid>
    ))}
  </Grid>
)