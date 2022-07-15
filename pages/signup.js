import styles from '../styles/Home.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Head from 'next/head';
import Link from 'next/link'
import { useState } from 'react';
import axios from 'axios'
import NumberFormat from 'react-number-format'

export default function SignUp() {

    const [name, setName] = useState()
    const [birthday, setBirthday] = useState()
    const [cpf, setCPF] = useState()
    const [gender, setGender] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [repassword, setRepassword] = useState()

    function submitForm() {
        const dataForm = {
            name: name,
            birthday: birthday,
            cpf: cpf,
            gender: gender,
            email: email,
            password: password,
            repassword: repassword,
            unlettered: false,
            pronouns: "Ele",
            color_blindness: "Nenhum"
        }

        axios.post('http://localhost:3001/client/register', dataForm)
            .then((response) => {

                document.getElementById('status').textContent = response.data.message
                document.getElementById('status').classList.remove('d-none')

                if (response.data.auth == true) {
                    router.push("/main")
                }

            })
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
                    <Link href='/signin'>
                        <a>
                            <img className={styles.clickable+' '+styles.fixed_arrow} src='/arrow.png' />
                        </a>
                    </Link>

                    <br />

                    <h5 className={styles.center_text + ' text-dark'}><b>Cadastre-se</b></h5>

                    <div className={styles.center_text + ' container w-75 mt-3 mb-3'}>

                        <span id="status" className='d-none'>
                            Suas credenciais estão incorretas.
                        </span>

                        <br />

                        <div className="d-inline-flex">
                            <div>
                                <form className='mt-4'>
                                    <div className="form-floating mb-3">
                                        <input onChange={(e) => {
                                            document.getElementById('status').classList.add('d-none')
                                            setName(e.target.value)
                                        }} type="name" className={jobeestyles.input_default + " form-control border text-dark"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">Nome</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <NumberFormat
                                            onChange={(e) => {
                                                document.getElementById('status').classList.add('d-none')
                                                setBirthday(e.target.value)
                                            }}
                                            format="##/##/####"
                                            className={jobeestyles.input_default + " text-dark form-control border"}
                                            placeholder="name@example.com"
                                            type="birthday"
                                            id="birthday-field"
                                        />
                                        <label htmlFor="birthday-field" className="text-dark">Data de Nascimento</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <NumberFormat
                                            onChange={(e) => {
                                                document.getElementById('status').classList.add('d-none')
                                                setCPF(e.target.value)
                                            }}
                                            format="###.###.###-##"
                                            className={jobeestyles.input_default + " text-dark form-control border"}
                                            placeholder="name@example.com"
                                            type="cpf"
                                            id="cpf-field"
                                        />
                                        <label htmlFor="cpf-field" className="text-dark">CPF</label>
                                    </div>

                                    <select onChange={(e) => {
                                        document.getElementById('status').classList.add('d-none')
                                        setGender(e.target.value)
                                    }} className={jobeestyles.input_default + " form-select border text-dark"} aria-label="Default select example">
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
                                        <input onChange={(e) => {
                                            document.getElementById('status').classList.add('d-none')
                                            setEmail(e.target.value)
                                        }} type="email" className={jobeestyles.input_default + " form-control border text-dark"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">E-mail</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input onChange={(e) => {
                                            document.getElementById('status').classList.add('d-none')
                                            setPassword(e.target.value)
                                        }} type="password" className={jobeestyles.input_default + " form-control border text-dark"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">Senha</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input onChange={(e) => {
                                            document.getElementById('status').classList.add('d-none')
                                            setRepassword(e.target.value)
                                        }} type="password" className={jobeestyles.input_default + " form-control border text-dark"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">Repetir Senha</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='container w-25'>
                        <button type="submit" onClick={submitForm} className={styles.mid_button + " btn btn-dark w-100 mt-3"}><b>Criar Conta</b></button>
                    </div>

                </div>

            </main>

        </motion.div>

    )

}