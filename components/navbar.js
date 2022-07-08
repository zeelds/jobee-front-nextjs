
import Image from 'next/image'
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

                    <div className={styles.item_holder + ' nav-item'}>
                        <Image className={styles.item_icon} src="/icons/home.png" width="32" height="32" />
                        <br />
                        Início
                    </div>

                    <div className={styles.item_holder + ' nav-item'}>
                        <Image className={styles.item_icon} src="/icons/person.png" width="32" height="32" />
                        <br />
                        Conexões
                    </div>

                    <div className={styles.item_holder + ' nav-item'}>
                        <Image className={styles.item_icon} src="/icons/briefcase.png" width="32" height="32" />
                        <br />
                        Premium
                    </div>

                    <div className={styles.item_holder + ' nav-item'}>
                        <Image className={styles.item_icon} src="/icons/balloon.png" width="32" height="32" />
                        <br />
                        Comentários
                    </div>

                    <div className={styles.item_holder + ' nav-item'}>
                        <Image className={styles.item_icon} src="/icons/bell.png" width="32" height="32" />
                        <br />
                        Notificações
                    </div>

                    <div className={styles.item_holder + ' nav-item'}>
                        <Image className={styles.item_icon} src="/icons/profile.png" width="32" height="32" />
                        <br />
                        Seu Perfil
                    </div>

                </div>
            </nav>
        </div>
    )
}