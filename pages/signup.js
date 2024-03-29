import styles from '../styles/Home.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import responsive from '../styles/Responsive.module.css'
import { motion } from "framer-motion"
import Head from 'next/head';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format'
import Revealer from '../components/smart/revealer';
import { axiosInstance } from '../config/axios';
import Router from 'next/router';
import { isAuth } from '../config/auth';

export default function SignUp() {

    const [name, setName] = useState()
    const [birthday, setBirthday] = useState()
    const [cpf, setCPF] = useState()
    const [gender, setGender] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [repassword, setRepassword] = useState()

    useEffect(() => {
        if (isAuth()) {
            Router.push('/main')
        }
    }, [])

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
            pronouns: "Ele/Dele",
            color_blindness: "Nenhum"
        }

        axiosInstance.post('/client/register', dataForm)
            .then((response) => {

                const allErrors = response.data.errors || []
                const errorMessage = []

                allErrors.forEach((elem) => {
                    errorMessage.push(elem.content)
                })

                if (errorMessage.length) {
                    document.getElementById('status').textContent = errorMessage.join(' ')
                } else {
                    document.getElementById('status').textContent = response.data.message
                }

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

            <main className={styles.main_yellow}>

                <div className='mb-5 float-start container'>
                    <Link href='/signin'>
                        <a>
                            <img alt="" className={styles.clickable + ' ' + styles.fixed_arrow} src='/arrow.png' />
                        </a>
                    </Link>

                    <br />

                    <h5 className={styles.center_text + ' text-dark'}><b>Cadastre-se</b></h5>

                    <div className={styles.center_text + ' container w-75 mt-3 mb-3'}>

                        <span id="status" className='d-none'>
                            Suas credenciais estão incorretas.
                        </span>

                        <br />

                        <div className={"d-inline-flex " + responsive.dblock_on_sm}>
                            <div>
                                <form className='mt-4'>
                                    <div className="form-floating mb-3">
                                        <input autocomplete="off" onChange={(e) => {
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
                                            autocomplete="off"
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

                            <div className={'ms-5 ' + responsive.no_ms_on_sm}>
                                <form className='mt-4'>
                                    <div className="form-floating mb-3">
                                        <input onChange={(e) => {
                                            document.getElementById('status').classList.add('d-none')
                                            setEmail(e.target.value)
                                        }} type="email" className={jobeestyles.input_default + " form-control border text-dark"} id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" className="text-dark">E-mail</label>
                                    </div>

                                    <Revealer revId="password-field" onChange={(e) => {
                                        document.getElementById('status').classList.add('d-none')
                                        setPassword(e.target.value)
                                    }}
                                    />

                                    <Revealer field="Repetir senha" revId="repassword-field" onChange={(e) => {
                                        document.getElementById('status').classList.add('d-none')
                                        setRepassword(e.target.value)
                                    }}
                                    />

                                </form>
                            </div>
                        </div>
                    </div>

                    <div className={'container w-25 ' + responsive.w75_on_sm}>
                        <button type="submit" onClick={submitForm} className={styles.mid_button + " btn btn-dark w-100 mt-3"}><b>Criar Conta</b></button>
                    </div>

                </div>

            </main>

        </motion.div>

    )

}