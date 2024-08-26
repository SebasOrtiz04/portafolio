'use client';

import { createTheme } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#81868c',
      main: '#5a6168',
      dark: '#151f28 ',
      contrastText: '#d3d5d7',
    },
    secondary: {
      light: '#e7fff6',
      main: '#cefeed',
      dark: '#2b7460',
      contrastText: '#162923',
    },
    blackMask:{
      light: 'rgba(10,10,10,0.3)',
      main: 'rgba(10,10,10,0.6)',
      dark:'#0a0a0a',
      contrastText: 'rgb(111,111,111)'
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