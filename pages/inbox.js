import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import responsive from '../styles/Responsive.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'
import Link from 'next/link'
import { axiosInstance } from '../config/axios'

export default function GetInbox() {

    const mails = [
        {
            title: 'Esse é um mail template!',
            content: 'Ele não ficará aqui por muito tempo, então aproveite.',
            seen: false
        }
    ]

    //faz acontecer algum erro no localstorage, ver amanhã
    // axiosInstance.get('/inbox/get-inbox').then((response) => {
    //     console.log(response)
    // })

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
                                            </div>
                                            <p className="mb-1">{mail.content}</p>
                                            <small className="text-muted">Enviado por The Jobee Team.</small>
                                            {
                                                !mail.seen ?
                                                    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                                        <span className="visually-hidden">New alerts</span>
                                                    </span>
                                                    :
                                                    <></>
                                            }
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