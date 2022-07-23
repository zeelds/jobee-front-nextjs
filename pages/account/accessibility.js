import styles from '../../styles/Main.module.css'
import cardstyles from '../../styles/Card.module.css'
import jobeestyles from '../../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../../components/navbar'
import responsive from '../../styles/Responsive.module.css'
import Card from '../../components/smart/card'
import Link from 'next/link'
import pronounFix from '../../utils/pronounFix'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../../config/axios'
import { useAppContext } from '../_app'

export default function Accessibility() {

    const {accessibility} = useAppContext()
    const [accessibilityDefault, setAccessibility] = accessibility

    const [oldAccessibility, setOldAccessibility] = useState({...accessibilityDefault})

    const [newAccessibility, setNewAccessibility] = useState({...accessibilityDefault})

    function submitForm(e) {
        e.preventDefault()
        axiosInstance.post(('/client/redefine-accessibility'), newAccessibility)
            .then(async (response) => {

                setAccessibility(newAccessibility)
                setOldAccessibility(accessibility)

            })
    }

    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white + ' container w-75 ' + responsive.smaller_on_lg}>

                    <div className={'text-center'}>

                        <h5 className="mb-4"><b>Acessibilidade</b></h5>

                        <a>
                            Configure a acessibilidade para obter uma melhor experiência
                        </a>

                        <div className="form-floating mt-3 mb-3">
                            <select onChange={(e) => setNewAccessibility({ ...newAccessibility, pronouns: e.target.value })} value={newAccessibility.pronouns} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option value="Ele/Dele">Ele/Dele</option>
                                <option value="Ela/Dela">Ela/Dela</option>
                                <option value="Elu/Delu">Elu/Delu</option>
                            </select>
                            <label htmlFor="floatingSelect">Pronome de Preferência</label>
                        </div>

                        <div className="form-floating mt-3 mb-3">
                            <select className="form-select" id="floatingSelect" onChange={(e) => setNewAccessibility({ ...newAccessibility, color_blindness: e.target.value })} value={newAccessibility.color_blindness} aria-label="Floating label select example">
                                <option value="Nenhum">Nenhum</option>
                                <option value="Deuteranomalia">Deuteranomalia</option>
                                <option value="Protanomalia">Protanomalia</option>
                                <option value="Protanopia">Protanopia</option>
                                <option value="Deuteranopia">Deuteranopia</option>
                                <option value="Tritanomalia">Tritanomalia</option>
                                <option value="Tritanopia">Tritanopia</option>
                                <option value="Total">Total</option>
                            </select>
                            <label htmlFor="floatingSelect">Grau de Daltonismo</label>
                        </div>

                        <div className="form-check float-start">
                            <input onChange={() => setNewAccessibility({ ...newAccessibility, unlettered: !newAccessibility.unlettered })} checked={newAccessibility.unlettered} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Eu sou {pronounFix(newAccessibility.pronouns, 'iliterado/iliterada/iliterade')}
                            </label>
                        </div>

                        <br />

                        <button onClick={submitForm} className="w-100 btn btn-dark mt-2"><b>Salvar alterações</b></button>
                        <button onClick={() => {
                            setNewAccessibility(oldAccessibility)
                        }} className="w-100 btn mt-2"><b>Descartar</b></button>

                    </div>

                </main>

            </motion.div>
        </div>
    )
}