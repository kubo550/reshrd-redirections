import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Script from "next/script";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {


    return (
        <>
            <Head>
               <meta name={'robots'} content={'noindex, nofollow'}/>
            </Head>

            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-73W2T9ESVQ"/>
            <Script
                id='google-analytics'
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-73W2T9ESVQ');`,
                }}
            />
            <Component {...pageProps} />
        </>

    )
}
