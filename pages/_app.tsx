import "../styles/globals.css"

import type { AppProps } from "next/app"
import Head from "next/head"

import DarkModeProvider from "../providers/DarkModeProvider"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import Page from "../components/page/Page"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DarkModeProvider>
        <Page>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Page>
      </DarkModeProvider>
    </>
  )
}

export default MyApp
