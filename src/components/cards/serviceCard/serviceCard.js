import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { WhatsAppIconButton } from '@/components/utils/buttons';
import { Box } from '@mui/material';
import styles from './styles.module.css'

export default function ServicesCard({serviceTitle,serviceDescription,imagePath}) {
  return (
    <Card sx={{ margin: 3 }}>
      <CardMedia
        component="img"
        alt={serviceTitle}
        height="140"
        image={imagePath}
      />
      <CardContent sx={{position:'relative',height:'10rem',width:'90%',overflowY:'hidden',overflowX:'hidden'}}>
        
        <Box className={styles.mask}/>
        
        <Typography gutterBottom variant="h5" component="div">
          {serviceTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {serviceDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saber más del servicio</Button>
        <WhatsAppIconButton/>
      </CardActions>
    </Card>
  );
}