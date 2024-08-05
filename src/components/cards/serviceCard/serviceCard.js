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
import { useRouter } from 'next/navigation';

export default function ServicesCard({
  serviceTitle,
  serviceDescription,
  imagePath,
  _id,
  category
}) {

  const navigate = useRouter()
  return (
    <Card sx={{ margin: 3 }}>
      <CardMedia
        component="img"
        alt={serviceTitle}
        height="140"
        image={imagePath}
      />
      <CardContent sx={{position:'relative',height:'6rem',width:'90%',overflowY:'hidden',overflowX:'hidden'}}>
        
        <Box className={styles.mask}/>
        
        <Typography gutterBottom variant="h5" component="div">
          {serviceTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {serviceDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex'}}>
        <Button size="small" fullWidth onClick={() => navigate.push(`/service/${category?._id}/${_id}`)}>
          Saber más del servicio
        </Button>
        <WhatsAppIconButton/>
      </CardActions>
    </Card>
  );
}