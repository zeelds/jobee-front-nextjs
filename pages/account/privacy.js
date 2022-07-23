import styles from '../../styles/Main.module.css'
import cardstyles from '../../styles/Card.module.css'
import jobeestyles from '../../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../../components/navbar'
import Card from '../../components/smart/card'
import Link from 'next/link'

export default function Privacy() {
    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white}>

                    <div className="container">

                        Seus dados estão seguros conosco, nós fazemos isso e isso com seus dados.

                        Mas se você não quiser

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Eu desejo não compartilhar os meus dados pessoais de uso.
                                </label>
                        </div>

                    </div>


                </main>

            </motion.div>
        </div>
    )
}