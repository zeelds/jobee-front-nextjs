import { motion } from "framer-motion"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Router from "next/router"

export default function Home() {

    setTimeout(() => {
        Router.push('/start')
    }, 1850)

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
        >

            <main className={styles.main_yellow}>

                <Image className={styles.img_breath} src="/jobee.png" alt="Jobee Logo" width={256} height={256} />

            </main>

        </motion.div>
    )

}