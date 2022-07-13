import styles from '../styles/Home.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Head from 'next/head';
import Link from 'next/link'
import { useState } from 'react';

export default function SignUp() {

    const [name, setName] = useState()
    const [birthday, setBirthday] = useState()
    const [cpf, setCPF] = useState()
    const [gender, setGender] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [repassword, setRepassword] = useState()

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
                    <Link href='/signin'>
                        <a>
                            <img className={styles.clickable} src='/arrow.png' />
                        </a>
                    </Link>

                    <br />

                    <h6 className={styles.center_text + ' text-dark'}><b>Cadastre-se</b></h6>

                    <div className={styles.center_text + ' container w-75 mt-3 mb-3'}>
                        <div className="d-inline-flex">
                            <div>
                                <form className='mt-4'>
                                    <div className="form-floating mb-3">
                                        <input type="name" className={jobeestyles.input_default + " form-control border text-dark"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">Nome</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="birthday" defaultValue="01/01/2000" className={jobeestyles.input_default + " form-control border text-dark"} id="nascimento-campo" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">Data de Nascimento</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="cpf" id="cpf-campo" className={jobeestyles.input_default + " form-control border text-dark"} />
                                        <label htmlFor="floatingInput" className="text-dark">CPF</label>
                                    </div>

                                    <select className={jobeestyles.input_default + " form-select border text-dark"} aria-label="Default select example">
                                        <option selected>Selecione um gênero</option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Outros">Outros</option>
                                        <option value="Prefiro não dizer">Prefiro não dizer</option>
                                    </select>
                                </form>
                            </div>

                            <div className='ms-5'>
                                <form className='mt-4'>
                                    <div className="form-floating mb-3">
                                        <input type="email" className={jobeestyles.input_default + " form-control border text-dark"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">E-mail</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="password" className={jobeestyles.input_default + " form-control border text-dark"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">Senha</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="password" className={jobeestyles.input_default + " form-control border text-dark"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">Repetir Senha</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='container w-25'>
                        <button type="submit" className={styles.mid_button + " btn btn-dark w-100 mt-3"}><b>Criar Conta</b></button>
                    </div>

                </div>

            </main>

        </motion.div>

    )

}