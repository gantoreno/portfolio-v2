import "../styles/globals.css"
import type { AppProps } from "next/app"
import DarkModeProvider from "../providers/DarkModeProvider"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  )
}

export default MyApp
