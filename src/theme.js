'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: 'rgba(0,0,0,0.8)',
      main: '#000',
      dark: '#607168 ',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#dac996',
      dark: '#25231c',
      contrastText: '#454032',
    },
    blackMask:{
      main: 'rgba(0,0,0,0.5)'
    },
    white:{
      main: 'rgba(255,255,255,0.5)'
    }
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;