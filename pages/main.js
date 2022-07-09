import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'

export default function Main() {
    return (
        <motion.div
            initial={{ opacity: 0, width: '100%' }}
            animate={{ opacity: '100%' }}
            exit={{ opacity: 0 }}
        >

            <Navbar />

            <main className={styles.main_white}>

                <div className={styles.display_flex+' container'}>

                    <div>

                        <div className={cardstyles.card_s_75 + " card"}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    </div>

                    <div className={cardstyles.card_s_100}>

                        <div className={cardstyles.card_s_100 + " card mb-3"}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className={cardstyles.card_s_100 + " card"}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    </div>


                </div>

            </main>
        </motion.div>
    )
}