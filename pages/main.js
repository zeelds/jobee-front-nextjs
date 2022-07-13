import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'
import Card from '../components/smart/card'
import axios from 'axios'
import Link from 'next/link'

export default function Main() {
    return (
        <motion.div
            initial={{ opacity: 0, width: '100%' }}
            animate={{ opacity: '100%' }}
            exit={{ opacity: 0 }}
        >

            <Navbar />

            <main className={styles.main_white}>

                <div className={styles.display_flex + ' container'}>

                    <div>

                        <Card class={cardstyles.card_s_75 + " card"} img="/avatar/komi.jpg">
                            <div className="card-body">
                                <h4>Dona Célia</h4>
                                <h6>Sobre mim</h6>
                                <p>
                                    Dona Célia é uma ótima costureira de 63 anos que tem um amor muito grande pelo que faz.
                                </p>
                                <h6>Qualificações</h6>
                                <p>
                                    Dona Célia é uma ótima costureira de 63 anos que tem um amor muito grande pelo que faz.
                                </p>
                                <div>
                                    <button className={'btn ' + jobeestyles.btn_yellow}>
                                        <b>Buscar Vagas</b>
                                    </button>
                                    <span className='ms-2 mx-2'>ou</span>
                                    <button className={'btn ' + jobeestyles.btn_yellow}>
                                        <b>Anunciar Vagas</b>
                                    </button>
                                </div>
                            </div>
                        </Card>

                    </div>

                    <div className={cardstyles.card_s_100}>

                    <Link href="/404">
                            <a>
                                <Card class={cardstyles.card_s_100 + " card mb-3"}>
                                    <div className="card-body">
                                        <h4>Vantagens do PRO</h4>
                                        Você pode comprar PRO para ter várias vantagens.
                                        <br />
                                        <div className='mt-3' style={{ display: 'inline-flex' }}>
                                            <span class={jobeestyles.ad_badge + " badge rounded-pill text-dark mx-1"}>Anúncio📢</span>
                                        </div>
                                    </div>
                                </Card>
                            </a>
                        </Link>

                        <Link href="/404">
                            <a>
                                <Card class={cardstyles.card_s_100 + " card mb-3"}>
                                    <div className="card-body">
                                        <h4>Minha apresentação</h4>
                                        Olá eu sou a Dona Célia, esse é meu primeiro post na plataforma do Jobee. Espero que eu faça muitos amigos e descubra muitas oportunidades!
                                        <br />
                                        <div className='mt-3' style={{ display: 'inline-flex' }}>
                                            <span class={jobeestyles.premium_badge + " badge rounded-pill text-dark mx-1"}>PRO🌟</span>
                                            <span class={jobeestyles.default_badge + " badge rounded-pill text-light mx-1"}>Costura</span>
                                            <span class={jobeestyles.default_badge + " badge rounded-pill text-light mx-1"}>Idosa</span>
                                            <span class={jobeestyles.default_badge + " badge rounded-pill text-light mx-1"}>Felicidade</span>
                                        </div>
                                    </div>
                                </Card>
                            </a>
                        </Link>

                        <Card class={cardstyles.card_s_100 + " card mb-3"}>
                            <div className="card-body">
                                teste
                            </div>
                        </Card>

                        <Card class={cardstyles.card_s_100 + " card mb-3"}>
                            <div className="card-body">
                                teste
                            </div>
                        </Card>

                    </div>


                </div>


            </main>

        </motion.div>
    )
}