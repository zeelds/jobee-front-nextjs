import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import responsive from '../styles/Responsive.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'
import Link from 'next/link'
import { axiosInstance } from '../config/axios'
import { useEffect, useState } from 'react'

import pronounFix from '../utils/pronounFix'
import { useAppContext } from './_app'

export default function GetInbox() {

    const { accessibility } = useAppContext()
    const [accessibilityValue, setAccessibility] = accessibility

    const [mails, setMails] = useState([
        {
            title: '',
            content: 'Sua caixa de entrada está vazia no momento.',
            seen: true,
            notDeletable: true
        }
    ])

    useEffect(() => {
        axiosInstance.get('/inbox/get-inbox').then((response) => {
            if (!response.data) return
            const foundMails = response.data
            setMails(foundMails)
        })
    }, [])

    function correctPronoun(string) {
        const renewedText = string.split(" ")
            .map((e) => {
                if (e.includes('/')) {
                    return pronounFix(accessibilityValue.pronouns, e)
                }
                return e
            })

        return renewedText.join(" ")
    }

    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white}>

                    <div className={'container text-center'}>

                        <h1><b>Todos os avisos em um único lugar.</b></h1>

                        <br />

                        <div className={"container w-50 " + responsive.w75_on_sm}>
                            <div className="list-group">
                                {mails.map((mail, index) => {
                                    return (
                                        <a key={'mail-' + index} className="list-group-item">
                                            <div className="d-flex w-100 justify-content-between ">
                                                <h5 className="mb-1">{mail.title}</h5>
                                                {
                                                    mail.notDeletable ?
                                                        <></>
                                                        :
                                                        <small>
                                                            <span onClick={async () => {
                                                                const userChoice = await confirm(`Você tem certeza que deseja deletar "${mail.title}"?`)
                                                                if (userChoice) {
                                                                    await axiosInstance.post('/inbox/delete-inbox', { id: mail.id })

                                                                    axiosInstance.get('/inbox/get-inbox').then((response) => {
                                                                        if (!response.data) {
                                                                            setMails([
                                                                                {
                                                                                    title: '',
                                                                                    content: 'Sua caixa de entrada está vazia no momento.',
                                                                                    seen: true,
                                                                                    notDeletable: true
                                                                                }
                                                                            ])
                                                                            
                                                                            return
                                                                        }
                                                                        const foundMails = response.data
                                                                        setMails(foundMails)
                                                                    })
                                                                }
                                                            }} className={"text-danger " + styles.clickable} href="#">
                                                                Descartar
                                                            </span>
                                                        </small>
                                                }
                                            </div>
                                            <p className="mb-1">{correctPronoun(mail.content)}</p>
                                            <small className="text-muted">Enviado por The Jobee Team.
                                            </small>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                    </div>

                </main>

            </motion.div>
        </div>
    )
}