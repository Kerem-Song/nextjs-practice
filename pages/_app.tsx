import { AppProps } from "next/app";
import NavBar from "../components/NavBar/NavBar";
import "../styles/globals.css"

export default function App ({Component, pageProps}: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps}/>
      <style jsx global>
        {
          `
            a {
              color: brown
            }
          `
        }
      </style>
    </div>
  )
}