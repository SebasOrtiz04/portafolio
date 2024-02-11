
import { Container, Stack, Typography } from "@mui/material";
import styles from './styles.module.css'
import { WhatsAppTextButton } from "@/components/utils/buttons";
import { carrucelStyles } from '@/app/styles/carrucleStyles';

const {content, contentText, contentStack} = carrucelStyles;

const Hero2 = () =>{
    return(
        <Container sx={content}>
            <Typography align="center" sx={contentText} className={styles.carrucel__text}>
                Conoce nuestros paquetes y precios
            </Typography>
            <Stack sx={contentStack} direction={'row'} justifyContent={'flex-end'}>
                <WhatsAppTextButton/>
            </Stack>
        </Container>
    )
}

export default Hero2;