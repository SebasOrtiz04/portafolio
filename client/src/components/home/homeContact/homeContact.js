import FormEmail from '@/components/utils/formEmail'
import GoogleMaps from '@/components/utils/googleMaps'
import { Title1 } from '@/components/utils/titles'
import {Container, Grid} from '@mui/material'

export default function HomeContact() {
  return (
    <Container sx={{paddingY:5}}>
        <Title1 title='Déjanos un mensaje'/>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <FormEmail/>
            </Grid>
            <Grid item xs={12} md={6} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <GoogleMaps/>
            </Grid>
        </Grid>
    </Container>
  )
}
