import {getRedirectUrlByCodeId} from "../../infrastructure/firebase";
import {GetServerSidePropsContext} from "next";
import Head from "next/head";
import {useEffect} from "react";

export default function Code(props: { codeId: string, redirectUrl: string }) {
    const redirectUrl = props.redirectUrl;
    const title = `RESHRD - ${props.codeId}`;

    useEffect(() => {

        if (redirectUrl) {
            window.location.href = redirectUrl;
        }

    },[redirectUrl]);

    return (
        <>

            <Head>
                <title>{title}</title>
                <meta name="description" content="Your unique reshrd redirection"/>
            </Head>

            <div>
                Redirecting...
            </div>
        </>
    )

}



// <noscript><img height="1" width="1" style="display:none"
//                src="https://www.facebook.com/tr?id=3056518837981368&ev=PageView&noscript=1"
// /></noscript>
// <!-- End Meta Pixel Code -->

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {codeId} = context.params as { codeId: string }
    console.log(codeId);

    const redirectUrl = await getRedirectUrlByCodeId(codeId) || 'https://reshrd.com/';

    return {
        props: {
            codeId,
            redirectUrl
        }
    }


}
