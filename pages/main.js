import styles from '../styles/Main.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'

export default function Main() {
    return (
        <motion.div
            initial={{opacity: 0, width: '100%'}}
            animate={{opacity: '100%'}}
            exit={{opacity: 0}}
        >

            <Navbar />

            <main className={styles.main_white}>

                alo juju

            </main>
        </motion.div>
    )
}