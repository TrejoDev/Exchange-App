import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ dark }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
