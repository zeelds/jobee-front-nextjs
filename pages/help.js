import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'
import Card from '../components/smart/card'
import Link from 'next/link'
import { Accordion } from 'react-bootstrap'

export default function Help() {

    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white}>

                    <div className="container w-75">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>O que é a Jobee #1</Accordion.Header>
                                <Accordion.Body>
                                    🐝 Jobee é uma plataforma para aproximar pessoas que buscam por oportunidades a pessoas e empresas que precisam de mão de obra não registrada de maneira segura e ágil.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Funcionalidades da Jobee #2</Accordion.Header>
                                <Accordion.Body>
                                    <ol class="list-group list-group-numbered">
                                        <li class="list-group-item">Ao abrir a aplicação em um dispositivo, o usuário poderá informar se o mesmo precisa de um auxílio para tornar a aplicação mais acessível;</li>
                                        <li class="list-group-item">Os usuários podem ingressar na plataforma ao enviar dados cadastrais básicos, como e-mail, senha, nome, gênero e etc;</li>
                                        <li class="list-group-item">Os usuários conseguem publicar artigos onde podem divulgar oportunidades de emprego, divulgar suas experiências e conhecimentos, declarar o desejo por uma oportunidade específica e receber comentários;</li>
                                        <li class="list-group-item">Os usuários acessam os perfis de outros usuários, onde podem contactar o autor através das informações de contato, enviar uma avaliação para aquele perfil, analisar seu histórico e ver seus pronomes de preferência</li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Tecnologias Principais #3</Accordion.Header>
                                <Accordion.Body>
                                    <ol class="list-group list-group-numbered">
                                        <li class="list-group-item">Front-end: React, Next.js, Axios, Framer, Bootstrap, useSound</li>
                                        <li class="list-group-item">Back-end: Node.js, Express, CORS, Sequelize, MySQL2, Body-parser, Jsonwebtoken, E-Mail Validator, dotENV, Multer, Nodemailer</li>
                                        <li class="list-group-item">Banco de Dados: MySQL</li>
                                        <li class="list-group-item">Teste de API: Insomnia</li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>

                </main>

            </motion.div>
        </div>
    )
}