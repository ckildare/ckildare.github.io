import Head from 'next/head';
import Header from '@/components/layout/header/header';
import { Inter } from '@next/font/google';
import styles from '@/styles/index.module.scss';

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Head>
        <title>Connor Kildare</title>
        <meta name="description" content="Portfolio site for Connor Kildare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Connor Kildare, Connor, Kildare, UNL, Conner Kildare, Conner, Portfolio, Portfolio Site" />
        <meta name="author" content="Connor Kildare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.pageContent}>
          hi
        </div>
      </main>
    </>
  )
}
