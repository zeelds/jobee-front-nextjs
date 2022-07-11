import styles from '../styles/Home.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Head from 'next/head';
import Link from 'next/link'

export default function SignIn() {

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

                        <form className='mt-4'>
                            <div className="form-floating mb-3">
                                <input type="email" className={jobeestyles.input_default + " form-control border"} id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput" className="text-dark">E-mail</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" className={jobeestyles.input_default + " form-control border"} id="floatingInput" placeholder="name@example.com" />
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