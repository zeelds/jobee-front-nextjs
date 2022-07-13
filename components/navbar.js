
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
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
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

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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