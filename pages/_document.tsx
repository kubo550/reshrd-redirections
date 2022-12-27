import Document, {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'

class WebDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-73W2T9ESVQ" id={'tag'}>
                    </Script>

                    <Script strategy="afterInteractive" id={'gtag'} dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-73W2T9ESVQ');`
                    }}>

                    </Script>


                    <Script strategy="afterInteractive" id={'pixel'}
                            dangerouslySetInnerHTML={{
                                __html: `  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '3056518837981368');
  fbq('track', 'PageView');`
                            }}
                    >
                    </Script>
                </Head>
                <body>
                <noscript dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.facebook.com/tr?id=3056518837981368&ev=PageView&noscript=1"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
                }}></noscript>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default WebDocument