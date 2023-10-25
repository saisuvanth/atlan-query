import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Component {...pageProps} />
        <ToastContainer
          autoClose={3000}
          position="top-center"
          newestOnTop
          closeOnClick
        />
      </ThemeProvider>
    </>
  );
}
