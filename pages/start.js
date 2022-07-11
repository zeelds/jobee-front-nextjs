import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import Head from 'next/head';
import Logo from '../components/logo';
import Link from 'next/link'

export default function Start() {

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

                <Logo />

                <Link href="/signin">
                    <button className={styles.mid_button + " btn btn-dark w-25 fw-bold p-3 text-break"} >Começar</button>
                </Link>

                <div className={styles.clickable+' text-dark mt-4'}>
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