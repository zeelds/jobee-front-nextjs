import { motion } from "framer-motion"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function teste() {

    return (
        <>

            <main className={styles.main_yellow}>

                <Image className={styles.img_breath} src="/jobee.png" alt="Jobee Logo" width={256} height={256} />

            </main>

        </>
    )

}