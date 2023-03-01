import {getRedirectUrlByCodeId} from "../infrastructure/firebase";
import {GetServerSidePropsContext} from "next";
import Head from "next/head";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Code(props: { codeId: string, redirectUrl: string }) {
    const redirectUrl = props.redirectUrl;
    const title = `RESHRD - ${props.codeId}`;

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

                if (redirectUrl) {
                    window.location.href = redirectUrl;
                }
            })

    },[redirectUrl, router.events]);


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
