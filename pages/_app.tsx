import "../styles/globals.css"
import type { AppProps } from "next/app"
import DarkModeProvider from "../providers/DarkModeProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}

export default MyApp
