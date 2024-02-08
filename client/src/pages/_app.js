import { useEffect, useState } from "react"
import { Provider } from 'react-redux'
import store from "@/store"
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';


export default function App({ Component, pageProps }) {
    const [paginaCargada, setPaginaCargada] = useState(false)
    useEffect(() => {
        setPaginaCargada(true)
    }, [])
    return (paginaCargada ?
        <AppCacheProvider>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </AppCacheProvider>
        : null)
}