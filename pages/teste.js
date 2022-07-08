import { motion } from "framer-motion"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function teste() {

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
        >

            <main className={styles.main_yellow}>

                <Link href="/start">
                    <a>
                        <Image className={styles.img_breath} src="/jobee.png" alt="Jobee Logo" width={256} height={256} />
                    </a>
                </Link>

            </main>

        </motion.div>
    )

}