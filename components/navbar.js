
import Image from 'next/image'
import Link from 'next/link'
import { Dropdown } from 'react-bootstrap'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm d-none d-md-block">
                <div className="container-fluid">
                    <div className={styles.centered_bar + " navbar-brand"} href="#">
                        <Link href="/main">
                            <a>
                                <div className={styles.navbar_brand}>
                                    <Image width="64" height="64" id='logo-image' className='d-inline-block align-text-top' src="/jobee.png" alt="Jobee Logo" />
                                </div>
                            </a>
                        </Link>
                        <input className={styles.item_spacing + " form-control"} id="search-bar" placeholder="🔍︎ Tente buscar algo" />

                    </div>

                    <div className='d-flex'>

                        <Link href="/main">
                            <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                <Image className={styles.item_icon} src="/icons/home.png" width="32" height="32" />
                                <br />
                                <b>Início</b>
                            </div>
                        </Link>

                        <Link href="/people">
                            <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                <Image className={styles.item_icon} src="/icons/person.png" width="32" height="32" />
                                <br />
                                <b>Pessoas</b>
                            </div>
                        </Link>

                        <Link href="/about">
                            <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                <Image className={styles.item_icon} src="/icons/about.png" width="32" height="32" />
                                <br />
                                <b>Sobre</b>
                            </div>
                        </Link>

                        <Link href="/comments">
                            <div className={styles.item_holder + ' position-relative mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                <Image className={styles.item_icon} src="/icons/email.png" width="32" height="32" />
                                <br />
                                <b>Avisos</b>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    99+
                                </span>
                            </div>
                        </Link>

                        <Dropdown>

                            <Dropdown.Toggle variant="none" className={`${styles.dropdown_basic} ${styles.dropdown_no_padding}`} id="bootstrap-dropdown">
                                <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                    <Image className={styles.item_icon} src="/icons/profile.png" width="32" height="32" />
                                    <br />
                                    <b>Seu Perfil</b>
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={`${styles.dropdown_large}`}>
                                <div className='container mb-3'>
                                    <div className='mt-3'>

                                        <img className={`mx-3 rounded-circle ${styles.dropdown_avatar}`} src="/avatar/komi.jpg" width="128" height="128" />

                                        <div className="ms-3">
                                            <b>Dona Célia</b>
                                            <br />
                                            <span>Técnica em n sei das quantas lorem ipsum mussum ipsum calcidis cacildis cacildis radiologia biologia matemática portugues</span>
                                            <br />
                                        </div>

                                    </div>
                                    <button className={`w-100 mt-2 btn btn-outline-dark ${styles.btn_border} ${styles.btn_nohover} rounded-pill`}>Visualizar perfil</button>

                                    <div className="container">
                                        <div className="row row-cols-3 mt-3">
                                            <div className="col">
                                                <Link href="/about">
                                                    <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                        <Image className={styles.item_icon} src="/icons/about.png" width="32" height="32" />
                                                        <br />
                                                        <b>Acessibilidade</b>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link href="/about">
                                                    <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                        <Image className={styles.item_icon} src="/icons/about.png" width="32" height="32" />
                                                        <br />
                                                        <b>Idiomas</b>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link href="/about">
                                                    <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                        <Image className={styles.item_icon} src="/icons/about.png" width="32" height="32" />
                                                        <br />
                                                        <b>Configurações de Conta</b>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="row row-cols-3 mt-3">
                                            <div className="col">
                                                <Link href="/about">
                                                    <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                        <Image className={styles.item_icon} src="/icons/about.png" width="32" height="32" />
                                                        <br />
                                                        <b>Privacidade</b>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link href="/about">
                                                    <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                        <Image className={styles.item_icon} src="/icons/about.png" width="32" height="32" />
                                                        <br />
                                                        <b>Ajuda</b>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link href="/about">
                                                    <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                        <Image className={styles.item_icon} src="/icons/about.png" width="32" height="32" />
                                                        <br />
                                                        <b>Sair</b>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Dropdown.Menu>

                        </Dropdown>

                        <Link href="/pro">
                            <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item text-break'}>
                                <Image className={styles.item_icon} src="/icons/pro_user.gif" width="32" height="32" />
                                <br />
                                <b>PRO</b>
                            </div>
                        </Link>

                    </div>

                </div>
            </nav>
        </div>
    )
}