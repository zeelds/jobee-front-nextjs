import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import responsive from '../styles/Responsive.module.css'
import navstyles from '../styles/Navbar.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'
import Card from '../components/smart/card'
import Link from 'next/link'
import Image from 'next/image'
import { useAppContext } from './_app'

export default function Profile() {


    const { search } = useAppContext()
    const [searchValue, setSearchValue] = search

    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white + ' ' + responsive.p1em_on_sm}>

                    <div className='container mb-3'>
                        <div className='mt-3'>

                            <div className="d-inline-flex w-100 mb-3">
                                <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className={styles.item_spacing + " form-control rounded-0"} id="search-bar" placeholder="🔍︎ Tente buscar algo" />
                                <button className="btn btn-dark rounded-0">Pesquisar</button>
                            </div>

                            <br />

                            <img alt="" className={`mx-3 rounded-circle ${navstyles.dropdown_avatar}`} src="/avatar/komi.jpg" width="128" height="128" />

                            <div className="ms-3">
                                <b>Dona Célia</b>
                                <br />
                                <span>Técnica em n sei das quantas lorem ipsum mussum ipsum calcidis cacildis cacildis radiologia biologia matemática portugues</span>
                                <br />
                            </div>

                        </div>
                        <Link href="/people">
                            <a>
                                <button className={`w-100 mt-2 btn btn-outline-dark ${navstyles.btn_border} ${navstyles.btn_nohover} rounded-pill`}>Visualizar perfil</button>
                            </a>
                        </Link>

                        <div className="container">
                            <div className="row row-cols-3 mt-3">
                                <div className="col">
                                    <Link href="/account/accessibility">
                                        <div className={navstyles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                            <Image alt="" className={navstyles.item_icon} src="/icons/accessibility.png" width="32" height="32" />
                                            <br />
                                            <b>Acessibilidade</b>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link href="/account/language">
                                        <div className={navstyles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                            <Image alt="" className={navstyles.item_icon} src="/icons/language.png" width="32" height="32" />
                                            <br />
                                            <b>Idiomas</b>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link href="/account/configurations">
                                        <div className={navstyles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                            <Image alt="" className={navstyles.item_icon} src="/icons/gear.png" width="32" height="32" />
                                            <br />
                                            <b>Configurações de Conta</b>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="row row-cols-3 mt-3">
                                <div className="col">
                                    <Link href="/account/privacy">
                                        <div className={navstyles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                            <Image alt="" className={navstyles.item_icon} src="/icons/lock.gif" width="32" height="32" />
                                            <br />
                                            <b>Privacidade</b>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link href="/help">
                                        <div className={navstyles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                            <Image alt="" className={navstyles.item_icon} src="/icons/help.png" width="32" height="32" />
                                            <br />
                                            <b>Ajuda</b>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link href="/signin">
                                        <div className={navstyles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                            <Image alt="" className={navstyles.item_icon} src="/icons/exit.png" width="32" height="32" />
                                            <br />
                                            <b>Sair</b>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>


                </main>

            </motion.div>
        </div>
    )
}