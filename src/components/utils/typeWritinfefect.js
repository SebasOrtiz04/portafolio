
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
        onBegin={function noRefCheck(){}}
        onComplete={function noRefCheck(){}}
        onDestroy={function noRefCheck(){}}
        onLastStringBackspaced={function noRefCheck(){}}
        onReset={function noRefCheck(){}}
        onStart={function noRefCheck(){}}
        onStop={function noRefCheck(){}}
        onStringTyped={function noRefCheck(){}}
        onTypingPaused={function noRefCheck(){}}
        onTypingResumed={function noRefCheck(){}}
        strings={strings}
        typeSpeed={50}
        typedRef={function noRefCheck(){}}
      />
    </Typography>
  );
};

export default TypewriterEffect;
