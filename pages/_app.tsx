import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@/styles/globals.css';
import Nav from '@/partials/Nav/Nav';
import GlobalStyle from '@/utils/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
