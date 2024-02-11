import { carrucelStyles } from "@/app/styles/carrucleStyles";
import { Container, Stack, Typography } from "@mui/material";
import styles from './styles.module.css'
import { WhatsAppTextButton } from "@/components/utils/buttons";

const {content, contentText, contentStack} = carrucelStyles;

const Hero1 = () =>{
    return(
        <Container sx={content}>
            <Typography align="center" sx={contentText} className={styles.carrucel__text}>
                ¿Quieres un evento inolvidable?, Contáctanos y conoce nuestro Salón Jardín
            </Typography>
            <Stack sx={contentStack} direction={'row'} justifyContent={'flex-end'}>
                <WhatsAppTextButton/>
            </Stack>
        </Container>
    )
}

export default Hero1;