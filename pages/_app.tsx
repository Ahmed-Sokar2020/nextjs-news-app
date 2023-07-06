import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Container } from 'react-bootstrap'
import Head from 'next/head'
import styles from '@/styles/App.module.css'
import NavBar from '@/components/NavBar'
import NextNProgressBar from 'nextjs-progressbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <Head>
                <title key="title">NextJS News App</title>
                <meta name="description" content="create news next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            
            <NextNProgressBar/> {/* ProgressBar for loading before fetching data */}

            <NavBar/>
            
            <Container className={styles.container}>
                <Component {...pageProps} />
            </Container>

            <Footer />
        </div>
    )
}
