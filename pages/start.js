import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import Head from 'next/head';
import Logo from '../components/logo';
import Link from 'next/link'
import responsive from '../styles/Responsive.module.css'
import Router from 'next/router';

export default function Start() {

    const isLogged = true //localStorage.getItem("token")

    return (
        <motion.div
            initial={{ opacity: 1, width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
        >

            <main className={styles.main_yellow}>

                <Logo />

                <button onClick={() => {
                    if (isLogged) {
                        Router.push('/main')
                    } else {
                        Router.push('signin')
                    }
                }} className={styles.mid_button + " btn btn-dark w-50 fw-bold p-3 text-break " + responsive.smaller_25_on_lg} >Começar</button>

                <div className={styles.clickable + ' text-dark mt-4'}>
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