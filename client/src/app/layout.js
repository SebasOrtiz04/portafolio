"use client"

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import NavBar from "@/layouts/navBar";
import { rootLayoutStyles } from "@/app/styles/mainStyles";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";

const {body} =  rootLayoutStyles;

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <ThemeProvider theme={theme}>
      <body style={body}>

        <header>
          <NavBar/>
        </header>
        <main>
          <AppRouterCacheProvider>
            
              {children}
            
          </AppRouterCacheProvider>
        </main>
      </body>
      </ThemeProvider>
    </html>
  );
}
