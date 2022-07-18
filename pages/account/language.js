import styles from '../../styles/Main.module.css'
import cardstyles from '../../styles/Card.module.css'
import jobeestyles from '../../styles/Jobee.module.css'
import responsive from '../../styles/Responsive.module.css'
import { motion } from "framer-motion"
import Navbar from '../../components/navbar'
import Card from '../../components/smart/card'
import Link from 'next/link'

export default function Language() {
    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white}>

                    <div className={'container'}>

                        <h5 className="mb-4"><b>Idiomas</b></h5>

                        <a>
                            Adicione um idioma para ler e digitar neste idioma
                        </a>

                        <div className="w-75">

                            <div className="form-floating">
                                <select className="form-select mt-2 mb-2" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Brasil (Português)</option>
                                </select>
                                <label htmlFor="floatingSelect">Localidade</label>
                            </div>

                            <div className="form-floating">
                                <textarea disabled className="form-control h-100 overflow-hidden" placeholder="Leave a comment here" id="floatingTextarea2">
                                    O incentivo ao avanço tecnológico, assim como a estrutura atual da organização pode nos levar a considerar a reestruturação dos paradigmas corporativos.
                                </textarea>
                                <label htmlFor="floatingTextarea2">Texto fictício</label>
                            </div>
                        </div>

                    </div>

                </main>

            </motion.div>
        </div>
    )
}