import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import Head from 'next/head';
import Logo from '../components/logo';

export default function Start() {

    return (
        <>

            <Head>
                <link href='http://fonts.googleapis.com/css?family=Shrikhand'
                    rel='stylesheet' type='text/css' />
            </Head>

            <main className={styles.main_yellow}>

                <Logo />

                <button className={styles.mid_button + " btn btn-dark w-25 fw-bold p-3 text-break"} >Começar</button>

                <div className='text-dark' style={{ cursor: 'pointer', marginTop: '25px' }}>
                    <b>
                        Termos e Condições
                    </b>
                </div>

            </main>

        </>
    )

}