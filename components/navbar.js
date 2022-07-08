
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm d-none d-md-block">
                <div className="container-fluid">
                    <div className={styles.centered_bar + " navbar-brand"} href="#">
                        <Image width="64" height="64" id='logo-image' className={styles.navbar_brand + ' d-inline-block align-text-top'} src="/jobee.png" alt="Jobee Logo" />
                        <input className={styles.item_spacing + " form-control"} id="search-bar" placeholder="Tente buscar algo" />

                    </div>

                    <div className='d-flex'>

                        <Link href="/main">
                            <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                <Image className={styles.item_icon} src="/icons/home.png" width="32" height="32" />
                                <br />
                                <span>Início</span>
                            </div>
                        </Link>

                        <Link href="/connections">
                            <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                <Image className={styles.item_icon} src="/icons/person.png" width="32" height="32" />
                                <br />
                                <span>Conexões</span>
                            </div>
                        </Link>

                        <Link href="/pro">
                            <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                <Image className={styles.item_icon} src="/icons/briefcase.png" width="32" height="32" />
                                <br />
                                Seja Pro
                            </div>
                        </Link>

                        <Link href="/comments">
                            <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                <Image className={styles.item_icon} src="/icons/balloon.png" width="32" height="32" />
                                <br />
                                Comentários
                            </div>
                        </Link>

                        <Link href="/comments">
                            <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                <Image className={styles.item_icon} src="/icons/bell.png" width="32" height="32" />
                                <br />
                                Notificações
                            </div>
                        </Link>

                        <Link href="/profile">
                            <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                <Image className={styles.item_icon} src="/icons/profile.png" width="32" height="32" />
                                <br />
                                Seu Perfil
                            </div>
                        </Link>

                    </div>


                </div>
            </nav>
        </div>
    )
}