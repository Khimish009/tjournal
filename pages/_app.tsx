import {
  MuiThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from '../theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </MuiThemeProvider>
);

export default MyApp;
