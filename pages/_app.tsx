import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Script from "next/script";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {

    const router = useRouter()

    useEffect(() => {
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init('3056518837981368')
                ReactPixel.pageView()

                router.events.on('routeChangeComplete', () => {
                    ReactPixel.pageView()
                })
            })
    }, [router.events])

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
