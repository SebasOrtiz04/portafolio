
import { Typography } from '@mui/material';
import { ReactTyped } from 'react-typed';
import styles from './styles.module.css'
import { useEffect, useState } from 'react';

const textTylesInitialState = {
  color:'white'
}

const TypewriterEffect = ({strings,customStyles,variant='h4'}) => {

  const [textStyles, setTextStyles] = useState(textTylesInitialState);

  useEffect(()=>{
    if(!customStyles) return;
    setTextStyles({...textStyles,...customStyles})
  },[customStyles])

  return (
    <Typography variant={variant} color={'white'} sx={{color:'white'}}>
      <ReactTyped
        backSpeed={50}
        style={textStyles}
        loop
        strings={strings}
        typeSpeed={50}
      />
    </Typography>
  );
};

export default TypewriterEffect;
