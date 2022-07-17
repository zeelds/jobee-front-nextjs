import styles from '../../styles/Main.module.css'
import cardstyles from '../../styles/Card.module.css'
import jobeestyles from '../../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../../components/navbar'
import Card from '../../components/smart/card'
import Link from 'next/link'

export default function Accessibility() {
    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white + ' container w-25'}>

                    <div className={'text-center'}>

                        <h5 className="mb-4"><b>Acessibilidade</b></h5>

                        <a>
                            Configure a acessibilidade para obter uma melhor experiência
                        </a>


                        <div class="form-floating mt-3 mb-3">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Ele/Dele</option>
                                <option value="1">Ela/Dela</option>
                                <option value="2">Elu/Delu</option>
                            </select>
                            <label for="floatingSelect">Pronome de Preferência</label>
                        </div>

                        <div class="form-floating mt-3 mb-3">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Nenhum</option>
                                <option value="1">Deuteranomalia</option>
                                <option value="2">Protanomalia</option>
                                <option value="3">Protanopia</option>
                                <option value="4">Deuteranopia</option>
                                <option value="5">Tritanomalia</option>
                                <option value="6">Tritanopia</option>
                                <option value="7">Total</option>
                            </select>
                            <label for="floatingSelect">Grau de Daltonismo</label>
                        </div>

                        <div class="form-check float-start">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Eu sou iliterado
                            </label>
                        </div>

                        <br />

                        <button className="w-100 btn btn-dark mt-2"><b>Salvar alterações</b></button>
                        <button className="w-100 btn mt-2"><b>Descartar</b></button>

                    </div>


                </main>

            </motion.div>
        </div>
    )
}