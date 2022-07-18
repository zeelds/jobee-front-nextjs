import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'
import Card from '../components/smart/card'
import axios from 'axios'
import Link from 'next/link'
import responsive from '../styles/Responsive.module.css'
import Head from 'next/head'

export default function Main(props) {

    return (
        <div className="bg-light">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white + ' ' + responsive.p1em_on_sm}>

                    <div className={styles.display_flex + ' container ' + responsive.dblock_on_sm}>

                        <div>

                            <Card class={cardstyles.card_s_75 + " card mb-3 " + responsive.w100_on_sm} img="/avatar/komi.jpg">
                                <div className="card-body">
                                    <h4>Dona Célia</h4>
                                    <h6><b>Sobre mim</b></h6>
                                    <p>
                                        Dona Célia é uma ótima costureira de 63 anos que tem um amor muito grande pelo que faz.
                                    </p>
                                    <h6><b>Qualificações</b></h6>
                                    <p>
                                        Esse usuário não inseriu nenhuma qualificação no momento.
                                    </p>
                                    <button className={'btn w-100 ' + jobeestyles.btn_yellow}>
                                        <b>Escrever artigo</b>
                                    </button>
                                    <button className={'btn w-100 '}>
                                        <b>Buscar vagas</b>
                                    </button>
                                </div>
                            </Card>

                        </div>

                        <div className={cardstyles.card_s_100}>

                            <Link href="/404">
                                <a>
                                    <Card class={cardstyles.card_s_100 + " card mb-3"}>
                                        <div className="card-body">
                                            <h4>Assine o Jobee PRO</h4>
                                            O Jobee PRO é uma experiência adquirida por pagamento único que oferece aos nossos clientes mais fiéis acesso exclusivo a recursos premium e personalizações adicionais.
                                            <br />
                                            <div className='mt-3' style={{ display: 'inline-flex' }}>
                                                <span className={jobeestyles.ad_badge + " badge rounded-pill text-dark mx-1"}>Anúncio📢</span>
                                            </div>
                                        </div>
                                    </Card>
                                </a>
                            </Link>

                            <Card class={cardstyles.card_s_100 + " card mb-3"}>
                                <div className="card-body">
                                    <div class="form-floating mb-3">
                                        <input type="email" readonly class="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Dê um título" />
                                    </div>
                                    <div class="form-floating mb-3">
                                        <textarea type="email" readonly class="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="O que está acontecendo?" />
                                    </div>
                                    <div class="form-floating mt-3">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected>Selecione tags</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <label for="floatingSelect">Tags</label>
                                    </div>
                                    <div className='mt-2 mb-2' style={{ display: 'inline-flex' }}>
                                        <span className={jobeestyles.ad_badge + " badge rounded-pill text-dark mx-1"}>Anúncio📢</span>
                                    </div>
                                    <br />
                                    <button className="btn btn-dark me-2">
                                        <b>Enviar</b>
                                    </button>
                                    <a className="btn rounded-pill border border-dark border-2">

                                        <b>200</b>

                                    </a>
                                </div>
                            </Card>

                        </div>

                    </div>

                </main>

            </motion.div>
        </div>
    )
}