import { Container, Stack, Typography } from "@mui/material";
import styles from './styles.module.css'
import { WhatsAppTextButton } from "@/components/utils/buttons";

const FirstStepContent = () =>{
    return(
        <Container sx={{display:'flex',alignItems:'center',height:'100%',justifyContent:'space-evenly',flexDirection:'column', gap:'1rem','@media (max-width: 1024px)':{justifyContent:'center'}}}>
            <Typography align="center" sx={{fontSize:'3rem','@media (max-width: 768px)':{fontSize:'2.2rem'}}} className={styles.carrucel__text}>
                ¿Quieres un evento inolvidable?, Contáctanos y conoce nuestro Salón Jardín
            </Typography>
            <Stack sx={{width:'100%'}} direction={'row'} justifyContent={'flex-end'}>
                <WhatsAppTextButton/>
            </Stack>
        </Container>
    )
}

const SecondStepContent = () =>{
    return(
        <Container sx={{display:'flex',alignItems:'center',height:'100%',justifyContent:'space-evenly',flexDirection:'column', gap:'1rem','@media (max-width: 1024px)':{justifyContent:'center'}}}>
            <Typography align="center" sx={{fontSize:'3rem','@media (max-width: 768px)':{fontSize:'2.2rem'}}} className={styles.carrucel__text}>
                Conoce nuestros paquetes y precios
            </Typography>
            <Stack sx={{width:'100%'}} direction={'row'} justifyContent={'flex-end'}>
                <WhatsAppTextButton/>
            </Stack>
        </Container>
    )
}

export const imagesInitialState = [
    {
      label: 'Salón de fiestas de noche',
      imgPath:'img/Carrucel/plauque_de_noche.jpg',
      content: <FirstStepContent/>
    },
    {
      label: 'Salón de fiestas de noche',
      imgPath:'img/Carrucel/plaque_plata_dia.jpg',
      content: <SecondStepContent/>
    }
];