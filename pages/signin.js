import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import Head from 'next/head';
import Link from 'next/link'

export default function SignIn() {

    return (
        <motion.div
            initial={{ opacity: 1, width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
        >

            <Head>
                <link href='http://fonts.googleapis.com/css?family=Roboto'
                    rel='stylesheet' type='text/css' />
            </Head>

            <main className={styles.main_yellow}>

                <div className='mb-5 float-start container'>
                    <Link href='/start'>
                        <a>
                            <img className={styles.clickable} src='/arrow.png' />
                        </a>
                    </Link>
                </div>

                <Link href="/main">
                    <button className={styles.mid_button + " btn btn-dark w-25 fw-bold p-3 text-break"} >Começar</button>
                </Link>

                <div className='text-dark' style={{ cursor: 'pointer', marginTop: '25px' }}>
                    <Link href="/terms">
                        <b>
                            Termos e Condições
                        </b>
                    </Link>
                </div>

            </main>

        </motion.div>

    )

}