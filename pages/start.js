import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"
import Image from 'next/image'
import Head from 'next/head';

export default function Start() {

    return (
        <>

            <Head>
                <link href='http://fonts.googleapis.com/css?family=Shrikhand'
                    rel='stylesheet' type='text/css' />
            </Head>

            <main className={styles.main_yellow}>

                <Image className={styles.img_logo} src="/jobee.png" alt="Jobee Logo" width={256} height={256} />

                <button className="btn btn-dark w-25 fw-bold" style={{ padding: '15px' }}>Começar</button>

                <div className='text-dark' style={{cursor:'pointer', marginTop: '25px'}}>
                    <b>
                        Termos e Condições
                    </b>
                </div>

            </main>

        </>
    )

}