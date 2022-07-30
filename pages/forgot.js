import styles from '../styles/Home.module.css'
import revealstyles from '../styles/Reveal.module.css'
import responsive from '../styles/Responsive.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Head from 'next/head';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router'
import Reveal from '../components/reveal'
import Revealer from '../components/smart/revealer';
import { axiosInstance } from '../config/axios'
import { isAuth, login } from '../config/auth'
import { useAppContext } from './_app'

export default function Forgot() {

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submitForm(e) {
        e.preventDefault()
        axiosInstance.post('/client/change-password', { email: email, newPassword: password })
            .then(() => {
                document.getElementById('status').classList.remove('d-none')
            })

    }

    return (
        <motion.div
            initial={{ opacity: 1, width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
        >

            <main className={styles.main_yellow}>

                <div className='mb-5 float-start container'>
                    <Link href='/signin'>
                        <a>
                            <img alt="" className={styles.clickable + ' ' + styles.fixed_arrow} src='/arrow.png' />
                        </a>
                    </Link>

                    <br />

                    <div className={`container mt-5 ${responsive.w50_on_sm} ${responsive.w25_on_lg}`}>

                        <h5 className='text-dark'><b>Alterar senha</b></h5>

                        <span id="status" className='d-none'>
                            Se o e-mail corresponde a alguma conta existente, você poderá atualizar a senha ao checar seu e-mail.
                        </span>

                        <form className={`mt-4`} onSubmit={submitForm}>

                            <div className="form-floating mb-3">
                                <input autocomplete="off" onChange={(e) => {
                                    document.getElementById('status').classList.add('d-none')
                                    setEmail(e.target.value)
                                }
                                } type="email" className={jobeestyles.input_default + " text-dark form-control border"} id="email" placeholder="email" />
                                <label htmlFor="email" className="text-dark">E-mail</label>
                            </div>

                            <Revealer field="Nova senha" revId="pass_revealer-" onChange={(e) => {
                                document.getElementById('status').classList.add('d-none')
                                setPassword(e.target.value)
                            }}
                            />

                            <button type="submit" className={styles.mid_button + " btn btn-dark w-100 mb-3"}><b>Entrar</b></button>

                        </form>

                    </div>

                </div>

            </main>

        </motion.div>

    )

}