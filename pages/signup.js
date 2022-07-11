import styles from '../styles/Home.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Head from 'next/head';
import Link from 'next/link'

export default function SignUp() {

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

                    <h6 className='text-dark' style={{ textAlign: 'center' }}><b>Cadastre-se</b></h6>

                    <div className='container w-75 mt-3 mb-3' style={{ textAlign: 'center' }}>

                        <div style={{ display: 'inline-flex' }}>

                            <div>

                                <form className='mt-4'>
                                    <div className="form-floating mb-3">
                                        <input type="email" className={jobeestyles.input_default + " form-control border"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">Nome</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" defaultValue="01/01/2000" className={jobeestyles.input_default + " form-control border"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">Data de Nascimento</label>
                                    </div>

                                    <div style={{ position: 'relative' }}>
                                        <a className='text-dark' style={{ position: 'absolute', border: '2px solid #F5C417', backgroundColor: '#F5C417', left: '3%', bottom: '-236%' }}>Gênero</a>
                                        <hr className={styles.bold_hr} />
                                    </div>

                                </form>

                            </div>

                            <div className='ms-5'>

                                <form className='mt-4'>
                                    <div className="form-floating mb-3">
                                        <input type="email" className={jobeestyles.input_default + " form-control border"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">E-mail</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" className={jobeestyles.input_default + " form-control border"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">Senha</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" className={jobeestyles.input_default + " form-control border"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">Repetir Senha</label>
                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                    <div className='container w-25'>
                        <button type="submit" className={styles.mid_button + " btn btn-dark w-100 mb-3"}><b>Criar Conta</b></button>
                    </div>


                </div>

            </main>

        </motion.div>

    )

}