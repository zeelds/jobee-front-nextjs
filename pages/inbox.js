import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import responsive from '../styles/Responsive.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'
import Link from 'next/link'

export default function Inbox() {
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
                                <a className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between ">
                                        <h5 className="mb-1">Estamos com saudades...</h5>
                                        <small className="text-muted">10 minutos atrás</small>
                                    </div>
                                    <p className="mb-1">Você está ausente por três dias. Gostaria de nos dar um feedback?</p>
                                    <small className="text-muted">Enviado por The Jobee Team.</small>
                                    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </a>
                                <a className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Uma dica!</h5>
                                        <small className="text-muted">3 dias atrás</small>
                                    </div>
                                    <p className="mb-1">Você sabia que há muitas vagas para você? Tente buscar por &apos;pintor&apos;.</p>
                                    <small className="text-muted">Enviado por The Jobee Team.</small>
                                    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </a>
                            </div>
                        </div>


                    </div>


                </main>

            </motion.div>
        </div>
    )
}