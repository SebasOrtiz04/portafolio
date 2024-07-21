import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { WhatsAppIconButton } from '@/components/utils/buttons';
import { Box, Skeleton } from '@mui/material';
import styles from './styles.module.css'

export const  ServicesLoaderCard = () => (
    <Card sx={{ margin: 3 }}>
      <Skeleton variant='rectangular' width={'100%'} height={140}/>
      <CardContent 
      sx={{position:'relative',height:'10rem',width:'90%',overflowY:'hidden',overflowX:'hidden'}}>
        
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