import FormEmail from '@/components/utils/formEmail'
import GoogleMaps from '@/components/utils/googleMaps'
import { Title1 } from '@/components/utils/titles'
import {Container, Grid} from '@mui/material'

export default function HomeContact() {
  return (
    <Container sx={{paddingY:5}}>
        <Title1 title='Visítanos'/>
        <GoogleMaps/>
    </Container>
  )
}
