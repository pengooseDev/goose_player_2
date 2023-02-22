import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@/styles/globals.css';
import Nav from '@/partials/Nav/Nav';
import GlobalStyle from '@/utils/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/theme';
import { useSelector } from 'react-redux';
import { ReactNode } from 'react';
import { RootState } from '@redux/store';
import Background from '@/partials/Background';
import { QueryClient, QueryClientProvider } from 'react-query';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  const isDark = useSelector<RootState>((state) => state.toggle);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Providers>
        <QueryClientProvider client={client}>
          <GlobalStyle />
          <Nav />
          <Background />
          <Component {...pageProps} />
        </QueryClientProvider>
      </Providers>
    </Provider>
  );
}
