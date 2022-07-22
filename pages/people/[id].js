import styles from '../../styles/Main.module.css'
import cardstyles from '../../styles/Card.module.css'
import responsive from '../../styles/Responsive.module.css'
import jobeestyles from '../../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../../components/navbar'
import Card from '../../components/smart/card'
import Link from 'next/link'

//Abre o perfil do usuário

export default function People() {
    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white + ' ' + responsive.p1em_on_sm}>

                    <div className={"d-flex justify-content-center container w-75 " + responsive.dblock_on_sm}>

                        <Card class={cardstyles.card_s_50 + " card mb-3 me-2 " + responsive.w100_on_sm} img="/avatar/komi.jpg">
                            <div className="card-body">

                                <h4>Nome Sobrenome</h4>
                                <h6><b>Avaliações</b></h6>
                                <div className="progress">
                                    <b className="me-2">4.5</b>
                                    <div className="progress-bar bg-warning w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <Link href="/review/link">
                                    <b className={styles.clickable+" text-decoration-underline"}>Ver todas as avaliações</b>
                                </Link>
                                <h6 className="mt-3"><b>Sobre mim</b></h6>
                                <p>
                                    Dona Célia é uma ótima costureira de 63 anos que tem um amor muito grande pelo que faz.
                                </p>
                                <h6><b>Qualificações</b></h6>
                                <p>
                                    Esse usuário não inseriu nenhuma qualificação no momento.
                                </p>

                            </div>
                        </Card>

                        <Card class={cardstyles.card_s_50 + " card mb-3 " + responsive.w100_on_sm}>
                            <div className="card-body">

                                Gummi bears chocolate cake brownie lollipop lollipop sweet roll candy I love gummi bears. Cotton candy liquorice liquorice cake chocolate cake. Jelly-o chocolate cake jelly beans jelly bear claw tootsie roll jujubes. Cookie powder halvah lollipop danish sweet roll pastry topping candy canes. I love jelly-o bear claw topping jelly beans. Muffin I love pudding chocolate candy canes donut. Brownie brownie dessert cupcake wafer I love. Brownie cheesecake chocolate jujubes tiramisu candy canes pie.

                            </div>
                        </Card>

                    </div>


                </main>

            </motion.div>
        </div>
    )
}