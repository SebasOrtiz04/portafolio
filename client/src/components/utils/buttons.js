import { Button ,IconButton} from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const whatsAppHRef = 'https://wa.me/2226622778?text=Hola,%20estoy%20interesado%20en%20el%20salón%20jardín.';

export const WhatsAppTextButton = ({text = 'Contáctanos'}) =>{
    return(                 
        <Button aria-label='contactanos por whatsapp' endIcon={<WhatsAppIcon color='success'/>} color='white' size="large"
        href={whatsAppHRef} target='_blank'
        >
            {text}
        </Button>
    )
}

export const WhatsAppIconButton = () =>{
    return(
        <IconButton size="large" aria-label='contactanos por whatsapp' href={whatsAppHRef} target='_blank'>
            <WhatsAppIcon  color="success" />
        </IconButton>
    )
}