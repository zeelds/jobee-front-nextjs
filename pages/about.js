import styles from '../styles/About.module.css'
import responsive from '../styles/Responsive.module.css'
import { motion, useViewportScroll } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react';

export default function About() {

    const { scrollYProgress } = useViewportScroll();
    const [opacity, setOpacity] = useState(0)

    scrollYProgress.onChange((e)=>setOpacity(e))

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
                                <motion.img
                                    animate={{opacity: 1-opacity}}
                                    className={styles.clickable + ' ' + styles.fixed_arrow} src='/arrow.png' />
                            </a>
                        </Link>

                        <div className={"mt-5 "+responsive.m25l_on_sm}>
                            <div className={"row"}>
                                <div className={`col mb-2 ${styles.about_container}`}>
                                    <img className={styles.about_avatar + ' ' + responsive.w170f_on_sm} src="/about/raqsanta.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Thulio Alves</h5>
                                            <p className={responsive.hide_on_sm} style={{ fontSize: '12px' }}>Sou um desenvolvedor web e entusiasta de TI. Gosto de Matrix, gatos e design. :P</p>
                                            <a href="https://github.com/raqsanta" target="_blank" className={"btn btn-dark rounded-pill " + responsive.hide_on_ssm}>Conhecer</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col mb-2 ${styles.about_container}`}>
                                    <img className={styles.about_avatar + ' ' + responsive.w170f_on_sm} width="256" height="256" src="/about/thayanne.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Thayanne Stella</h5>
                                            <p className={responsive.hide_on_sm} style={{ fontSize: '12px' }}>É uma desenvolvedora front-end alto-astral, criativa, entusiasta de design, organizada e engraçada.</p>
                                            <a href="https://github.com/thayannestella" target="_blank" className={"btn btn-dark rounded-pill " + responsive.hide_on_ssm}>Conhecer</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col ${styles.about_container}`}>
                                    <img className={styles.about_avatar + ' ' + responsive.w170f_on_sm} width="256" height="256" src="/about/laryssa.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Laryssa Kaylane</h5>
                                            <p className={responsive.hide_on_sm} style={{ fontSize: '12px' }}>Olá! Sou desenvolvedora front-end e estudante de nutrição. Amo os animais, tecnologia e sou bastante perfeccionista.</p>
                                            <a href="https://github.com/larysilvaak" target="_blank" className={"btn btn-dark rounded-pill " + responsive.hide_on_ssm}>Conhecer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className={`col mb-2 ${styles.about_container}`}>
                                    <img className={styles.about_avatar + ' ' + responsive.w170f_on_sm} width="256" height="256" src="/about/antony.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Antony Matheus</h5>
                                            <p className={responsive.hide_on_sm} style={{ fontSize: '12px' }}>Sou um desenvolvedor front-end determinado. Gosto de pesquisar, aprender e praticar. Amo passear com meu cachorro.</p>
                                            <a href="https://github.com/AntonyMatheus" target="_blank" className={"btn btn-dark rounded-pill " + responsive.hide_on_ssm}>Conhecer</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col mb-2 ${styles.about_container}`}>
                                    <img className={styles.about_avatar + ' ' + responsive.w170f_on_sm} width="256" height="256" src="/about/mariana.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Mariana Pereira</h5>
                                            <p className={responsive.hide_on_sm} style={{ fontSize: '12px' }}>Desenvolvedora focada em front-end e técnica em redes de computadores. Eu adoro gatos, café e um bom notebook.</p>
                                            <a href="https://github.com/zeelds" target="_blank" className={"btn btn-dark rounded-pill " + responsive.hide_on_ssm}>Conhecer</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col mb-2 ${styles.about_container}`}>
                                    <img className={styles.about_avatar + ' ' + responsive.w170f_on_sm} width="256" height="256" src="/about/gr.png" />
                                    <div className={`${styles.about_overlay}`}>
                                        <div className={`${styles.about_text_overlay} container`}>
                                            <h5>Girl React</h5>
                                            <p className={responsive.hide_on_sm} style={{ fontSize: '12px' }}>Time de desenvolvedores web com uma assinatura inclusiva em suas soluções.</p>
                                            <a href="https://github.com/girl-react" target="_blank" className={"btn btn-dark rounded-pill " + responsive.hide_on_ssm}>Conhecer</a>
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