import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'
import Card from '../components/smart/card'
import Link from 'next/link'

export default function Inbox() {
    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white}>

                    <div className={styles.display_flex + ' container'}>

                        fdsafsdfasd

                    </div>


                </main>

            </motion.div>
        </div>
    )
}