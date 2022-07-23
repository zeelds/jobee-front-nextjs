import styles from '../../styles/Main.module.css'
import cardstyles from '../../styles/Card.module.css'
import responsive from '../../styles/Responsive.module.css'
import shapestyles from '../../styles/Shapes.module.css'
import jobeestyles from '../../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../../components/navbar'
import Card from '../../components/smart/card'
import Link from 'next/link'

//Abre o perfil do usuário

export default function Article() {
    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white + ' ' + responsive.p1em_on_sm}>

                alo

                </main>

            </motion.div>
        </div>
    )
}