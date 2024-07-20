"use client"

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import NavBar from "@/components/layouts/navBar";
import { rootLayoutStyles } from "@/app/styles/mainStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";
import Footer from '@/components/layouts/footer';
import {Provider} from 'react-redux';
import store from '@/redux/store';
import { RootAlert } from '@/components/utils/alerts';
import './global.css'

const {body} =  rootLayoutStyles;

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Provider store={store}>
      <ThemeProvider theme={theme}>
      <body style={body}>

        <header>
          <NavBar/>
        </header>
        <main style={{marginTop:80}}>
          <AppRouterCacheProvider>
            
              {children}
              <RootAlert/>
          </AppRouterCacheProvider>
        </main>

        <Footer/>
      </body>

      </ThemeProvider>
      </Provider>
    </html>
  );
}
