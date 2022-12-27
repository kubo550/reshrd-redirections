import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RESHRD Redirection APP</title>
        <meta name="description" content="Your unique reshrd redirection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

    </div>
  )
}
