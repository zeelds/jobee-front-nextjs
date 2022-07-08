
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm d-none d-md-block">
                <div className="container-fluid">
                    <div className={styles.centered_bar+" navbar-brand"} href="#">
                        <Image width="64" height="64" id='logo-image' className={styles.navbar_brand+' d-inline-block align-text-top'} src="/jobee.png" alt="Jobee Logo" />
                        <div className={styles.item_spacing}>Barra de Pesquisa Aqui</div>
                    </div>
                    Home /
                    Pessoas /
                    Suitcase /
                    Chat /
                    Sino /
                    Perfil /
                </div>
            </nav>
        </div>
    )
}