import { Button } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WhatsAppTextButton = ({text = 'Contáctanos'}) =>{
    return(                 
        <Button aria-label='contactanos por whatsapp' endIcon={<WhatsAppIcon color='success'/>} color='white' size="large"
        href='https://wa.me/2226622778?text=Hola,%20estoy%20interesado%20en%20el%20salón%20jardín.' target='_blank'
        >
            {text}
        </Button>
    )
}