import styles from '../styles/About.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
        >

            <main className={styles.main_bege}>

                <div>

                    <div className='mb-5 float-start container'>
                        <Link href='/main'>
                            <a>
                                <img className={styles.clickable + ' ' + styles.fixed_arrow} src='/arrow.png' />
                            </a>
                        </Link>

                        <div className="container">
                            <div className="row">
                                <div className={`col ${styles.about_container}`}>
                                    <img className={styles.about_avatar} src="/about/raqsanta.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Thulio Alves</h5>
                                            <p style={{ fontSize: '12px' }}>Sou um desenvolvedor web e entusiasta de TI. Gosto de Matrix, gatos e design. :P</p>
                                            <a href="https://github.com/raqsanta" target="_blank" className="btn btn-dark rounded-pill">Conhecer</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col ${styles.about_container}`}>
                                    <img className={styles.about_avatar} width="256" height="256" src="/about/thayanne.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Thayanne Stella</h5>
                                            <p style={{ fontSize: '12px' }}>É uma desenvolvedora front-end alto-astral, criativa, entusiasta de design, organizada e engraçada.</p>
                                            <a href="https://github.com/thayannestella" target="_blank" className="btn btn-dark rounded-pill">Conhecer</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col ${styles.about_container}`}>
                                    <img className={styles.about_avatar} width="256" height="256" src="/about/laryssa.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Laryssa Kaylane</h5>
                                            <p style={{ fontSize: '12px' }}>Olá! Sou desenvolvedora front-end e estudante de nutrição. Amo os animais, tecnologia e sou bastante perfeccionista.</p>
                                            <a href="https://github.com/larysilvaak" target="_blank" className="btn btn-dark rounded-pill">Conhecer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className={`col ${styles.about_container}`}>
                                    <img className={styles.about_avatar} width="256" height="256" src="/about/antony.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Antony Matheus</h5>
                                            <p style={{ fontSize: '12px' }}>Sou um desenvolvedor front-end determinado. Gosto de pesquisar, aprender e praticar. Amo passear com meu cachorro.</p>
                                            <a href="https://github.com/AntonyMatheus" target="_blank" className="btn btn-dark rounded-pill">Conhecer</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col ${styles.about_container}`}>
                                    <img className={styles.about_avatar} width="256" height="256" src="/about/mariana.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Mariana Pereira</h5>
                                            <p style={{ fontSize: '12px' }}>Desenvolvedora focada em front-end e técnica em redes de computadores. Eu adoro gatos, café e um bom notebook.</p>
                                            <a href="https://github.com/zeelds" target="_blank" className="btn btn-dark rounded-pill">Conhecer</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col ${styles.about_container}`}>
                                    <img className={styles.about_avatar} width="256" height="256" src="/about/gr.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Girl React</h5>
                                            <p style={{ fontSize: '12px' }}>Time de desenvolvedores web com uma assinatura inclusiva em suas soluções.</p>
                                            <a href="https://github.com/girl-react" target="_blank" className="btn btn-dark rounded-pill">Conhecer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

        </motion.div>
    )

}