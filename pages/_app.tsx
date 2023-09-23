import type { AppProps } from 'next/app';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import '@/styles/globals.css';
import { darktTheme, lightTheme } from '@/theme';
import { CurrencyProvider } from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrencyProvider>
      <ThemeProvider theme={ lightTheme }>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CurrencyProvider>
  )
}
