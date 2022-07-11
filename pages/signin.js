import styles from '../styles/Home.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Head from 'next/head';
import Link from 'next/link'
import { useState } from 'react';

export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submitForm(e){
        e.preventDefault()
        console.log(email+' - '+password)
    }

    return (
        <motion.div
            initial={{ opacity: 1, width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
        >

            <Head>
                <link href='http://fonts.googleapis.com/css?family=Roboto'
                    rel='stylesheet' type='text/css' />
            </Head>

            <main className={styles.main_yellow}>

                <div className='mb-5 float-start container'>
                    <Link href='/start'>
                        <a>
                            <img className={styles.clickable} src='/arrow.png' />
                        </a>
                    </Link>

                    <br />

                    <div className='container w-25 mt-5'>

                        <h6 className='text-dark'><b>Login</b></h6>

                        <form className='mt-4' onSubmit={submitForm}>
                            <div className="form-floating mb-3">
                                <input onChange={(e)=>setEmail(e.target.value)} type="email" className={jobeestyles.input_default + " text-dark form-control border"} id="email" />
                                <label htmlFor="floatingInput" className="text-dark">E-mail</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input onChange={(e)=>setPassword(e.target.value)} type="password" className={jobeestyles.input_default + " text-dark form-control border"} id="password" />
                                <label htmlFor="floatingInput" className="text-dark">Senha</label>
                            </div>

                            <button type="submit" className={styles.mid_button + " btn btn-dark w-100 mb-3"}><b>Entrar</b></button>

                            <Link href="/signup">
                                <button className={styles.mid_button + " btn w-100 text-dark"}><b>Criar conta</b></button>
                            </Link>

                        </form>

                    </div>

                </div>

            </main>

        </motion.div>

    )

}