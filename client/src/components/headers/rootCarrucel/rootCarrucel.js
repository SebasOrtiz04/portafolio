'use client'

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import styles from './styles.module.css'
import { carrucelStyles } from '@/app/styles/carrucleStyles';

const images = [
  {
    label: 'Salón de fiestas de noche',
    imgPath:'img/Carrucel/plauque_de_noche.jpg',
  },
  {
    label: 'Salón de fiestas de noche',
    imgPath:'img/Carrucel/plaque_plata_dia.jpg',
  }
];

const {container, imageContainer} = carrucelStyles;

function Carrucel() {
    
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
<Box sx={container}>

        <div style={imageContainer}>
            <img
                srcSet={images[activeStep].imgPath}
                src={images[activeStep].imgPath}
                alt={images[activeStep].label}
                loading="lazy"
                width={300}
                height={200}
                className={styles.carrucel}
            />
        </div>

    
    <Box sx={{zIndex:20,position:'fixed',width:'100%',backgroundColor:'rgba(0,0,0,0.8)',height:'100%'}}>
      Hola
    </Box>

    <MobileStepper
        steps={maxSteps}
        position="bottom"
        activeStep={activeStep}
        sx={{backgroundColor:'transparent'}}
        nextButton={
          <Button size="medium" onClick={handleNext} disabled={activeStep === maxSteps - 1} >
            Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='medium' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />


    </Box>
  );
}

export default Carrucel;