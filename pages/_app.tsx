import 'rsuite/dist/rsuite.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component theme="light" {...pageProps} />
}

export default MyApp
