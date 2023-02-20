import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@/styles/globals.css';
import Nav from '@/partials/Nav/Nav';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}
