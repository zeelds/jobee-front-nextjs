import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import responsive from '../styles/Responsive.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'
import Card from '../components/smart/card'
import Link from 'next/link'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { axiosInstance } from '../config/axios'
import { useAppContext } from './_app'
import { useEffect } from 'react'

export default function Help() {

    const { pro } = useAppContext()
    const [proValue, setProValue] = pro

    if (proValue.invested || proValue.professional) {
        return (
            <div className="bg-light">

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: '100%' }}
                    exit={{ opacity: 0 }}
                >

                    <Navbar />

                    <main className={styles.main_white}>

                        <div className={styles.display_flex + ' container'}>



                        </div>


                    </main>

                </motion.div>
            </div>
        )
    }

    return (
        <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL || 'AW70Z0WkRhmyEyZL6KYmFAvYhPuvvsmla7R0297g3uJ0xu8dZQdof5CUPhwSyKinY9C4mNqrdqYAy3PG', currency: "BRL" }}>
            <div className="bg-light">

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: '100%' }}
                    exit={{ opacity: 0 }}
                >

                    <Navbar />

                    <main className={styles.main_white + ' text-center'}>

                        <h2 className="text-break"><b>Escolha o plano perfeito para você.</b></h2>
                        <h5 className="text-break mb-3"><b>Pagamento único, sem assinaturas</b></h5>

                        <br />

                        <div className={"d-inline-flex justify-content-center " + responsive.dblock_on_sm}>

                            <div className={"card w-25 me-2 mb-3 " + responsive.w100_on_sm}>
                                <div className="card-body mt-2">
                                    <h5 className="card-title"><b>Gratuito</b></h5>
                                    <p className={styles.small_text}>
                                        A versão padrão do Jobee para usuários comuns.
                                    </p>

                                    <h3>R$0</h3>

                                    <ul className="list-group text-start">
                                        <li className="list-group-item"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Você poderá criar artigos com imagens.</a>
                                        </li>
                                        <li className="list-group-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Você poderá adicionar comentários a artigos.</a>
                                        </li>
                                        <li className="list-group-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Você poderá avaliar usuários.</a>
                                        </li>
                                        <li className="list-group-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Você poderá ter acesso a seu inbox.</a>
                                        </li>
                                        <li className="list-group-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Editar seu perfil a qualquer momento.</a>
                                        </li>
                                        <li className="list-group-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Acesso ao suporte.</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className={"card w-25 me-2 mb-3 " + responsive.w100_on_sm}>
                                <div className="card-body mt-2">
                                    <h5 className="card-title"><b>Investido</b></h5>
                                    <p className={styles.small_text}>
                                        A versão ideal para aqueles interessados em participar ativamente na comunidade do Jobee.
                                    </p>

                                    <h3>
                                        R$28
                                        <a className={styles.small_text + ' ms-1'}>uma única vez</a>
                                    </h3>

                                    <DarkButton price={28.00} />

                                    <ul className="list-group text-start">
                                        <li className="list-group-item"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                            </svg>
                                            <a className={styles.small_text}>Todas as recompensas anteriores.</a>
                                        </li>
                                        <li className="list-group-item"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Você poderá editar artigos e comentários publicados por você.</a>
                                        </li>
                                        <li className="list-group-item"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Seus artigos terão uma medalha de Usuário PRO.</a>
                                        </li>
                                        <li className="list-group-item"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Você poderá buscar usuários pelo nome.</a>
                                        </li>
                                        <li className="list-group-item"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Nenhum anúncio será exibido para você.</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className={"card w-25 me-2 mb-3 " + responsive.w100_on_sm}>
                                <div className="card-body mt-2">
                                    <h5 className="card-title"><b>Profissional</b></h5>
                                    <p className={styles.small_text}>
                                        A versão definitiva para aqueles que gostam de uma experiência completa.
                                    </p>

                                    <h3>
                                        R$137
                                        <a className={styles.small_text + ' ms-1'}>uma única vez</a>
                                    </h3>

                                    <DarkButton price={28.00} />

                                    <ul className="list-group text-start">
                                        <li className="list-group-item"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                            </svg>
                                            <a className={styles.small_text}>Todas as recompensas anteriores.</a>
                                        </li>
                                        <li className="list-group-item"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Seus artigos poderão conter imagens.</a>
                                        </li>
                                        <li className="list-group-item"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Você poderá enviar GIFs para sua foto de perfil.</a>
                                        </li>
                                        <li className="list-group-item"  >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 bi bi-check" viewBox="0 0 16 16">
                                                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                            </svg>
                                            <a className={styles.small_text}>Seu perfil será recomendado como anúncio para usuários que não são Usuários PRO.</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                        </div>


                    </main>

                </motion.div>
            </div>
        </PayPalScriptProvider>
    )
}

const DarkButton = (props) => {

    const { pro } = useAppContext()
    const [proValue, setProValue] = pro

    return (

        <PayPalButtons

            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: props.price,
                                currency: 'BRL',
                            },
                        },
                    ],
                });
            }}

            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    const name = details.payer.name.given_name;
                    axiosInstance.post('/inbox/create-inbox', {
                        title: 'Parabéns',
                        content: 'Você se tornou um/uma/ume Usuário/Usuária/Usuárie PRO! Você acaba de adquirir diversas vantagens que usuários padrões não têm acesso, acesse a aba PRO para saber mais.'
                    })
                    axiosInstance.post('/payment/checkout', {
                        plan: 'Profissional',
                        payment_data: details
                    }).then((response) => {
                        setProValue({ invested: true, professional: true })
                    })
                });
            }}

            style={{ color: 'black', layout: "horizontal", tagline: false }}

            options={
                {
                    "client-id": "test",
                    intent: "capture",
                    "data-client-token": "abc123xyz==",
                }
            }

            className="btn w-100 mt-2 mb-2" />
    )

}