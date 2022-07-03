
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Navbar() {
    return (
        <nav class="navbar bg-light shadow-sm d-none d-md-block">
            <div class="container-fluid">
                <div style={{marginLeft: '20px', alignItems:'center', display: 'flex'}} class="navbar-brand" href="#">
                    <Image style={{backgroundColor: '#F5C417', borderRadius: '15%', stroke: '2px #F5C417'}} class="d-inline-block align-text-top" width="64" height="64" id='logo-image' className={styles.img_logo} src="/jobee.png" alt="Jobee Logo" />
                    <div style={{marginLeft: '15px'}}>Barra de Pesquisa Aqui</div>
                </div>
                Home /
                Pessoas /
                Suitcase /
                Chat /
                Sino /
                Perfil /
            </div>
        </nav>
    )
}