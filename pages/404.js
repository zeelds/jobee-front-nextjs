import { motion } from "framer-motion"
import styles from '../styles/Four.module.css'

export default function FourOFour() {

    return (

        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: "100%" }}
            exit={{ width: 0 }}
        >

            <main className={styles.main}>

                <div className={styles.breathing_item}>
                    <span className={styles.big_text}>
                        404
                    </span>
                    <br />
                    <span>
                        Página não encontrada
                    </span>
                </div>


            </main>

        </motion.div>

    )

}