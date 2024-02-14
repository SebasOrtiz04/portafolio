'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#000000',
      main: 'rgba(20,20,20,0.8)',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#caf1dd',
      dark: '#ba000d',
      contrastText: '#000',
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