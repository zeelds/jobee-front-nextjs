
import Router from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { Dropdown } from 'react-bootstrap'
import { useAppContext } from '../pages/_app'
import styles from '../styles/Navbar.module.css'
import responsive from '../styles/Responsive.module.css'
import { isAuth, logout } from '../config/auth'
import { useEffect } from 'react'
import { axiosInstance } from '../config/axios'

export default function Navbar() {

    const { search, user } = useAppContext()
    const [searchValue, setSearchValue] = search
    const [userValue, setUserValue] = user

    useEffect(() => {

        (async () => {
            await axiosInstance.get('/client/refresh-token')
                .catch(() => {
                    logout()
                    Router.push('/start')
                })
        })()
        
    }, [])

    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className={"container-fluid mt-1"}>

                    <div className={styles.centered_bar + " navbar-brand " + responsive.hide_on_sm} href="#">
                        <Link href="/main">
                            <a>
                                <div className={styles.navbar_brand}>
                                    <Image width="64" height="64" id='logo-image' className='d-inline-block align-text-top' src="/jobee.png" alt="Jobee Logo" />
                                </div>
                            </a>
                        </Link>
                        <input onKeyDown={(e)=>{
                            if(e.key=="Enter"){
                                Router.push('/search/'+searchValue)
                            }
                        }} onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className={styles.item_spacing + " form-control"} id="search-bar" placeholder="🔍︎ Tente buscar algo" />
                    </div>

                    <div className={'d-flex ' + responsive.center_on_sm}>

                        <Link href="/main">
                            <div className={styles.item_holder + ' mx-3 nav-item'}>
                                <Image alt="" className={styles.item_icon} src="/icons/home.png" width="32" height="32" />
                                <br />
                                <b className={responsive.hide_on_sm}>Início</b>
                            </div>
                        </Link>

                        <Link href="/people/464e098a-d833-4847-b619-117ab1c5c865">
                            <div className={styles.item_holder + ' mx-3 nav-item'}>
                                <Image alt="" className={styles.item_icon} src="/icons/person.png" width="32" height="32" />
                                <br />
                                <b className={responsive.hide_on_sm}>Pessoas</b>
                            </div>
                        </Link>

                        <Link href="/about">
                            <div className={styles.item_holder + ' mx-3 nav-item'}>
                                <Image alt="" className={styles.item_icon} src="/icons/about.png" width="32" height="32" />
                                <br />
                                <b className={responsive.hide_on_sm}>Sobre</b>
                            </div>
                        </Link>

                        <Link href="/inbox">
                            <div className={styles.item_holder + ' position-relative mx-3 nav-item'}>
                                <Image alt="" className={styles.item_icon} src="/icons/email.png" width="32" height="32" />
                                <br />
                                <b className={responsive.hide_on_sm}>Avisos</b>
                                <span className={`position-absolute top-0 start-100 ${responsive.badge_on_sm} translate-middle badge rounded-pill bg-danger`}>
                                    !
                                </span>
                            </div>
                        </Link>

                        <Dropdown className={`${styles.dropdown_basic} ${styles.dropdown_no_padding} mx-3`} drop="start" onClick={() => {
                            if (screen.width < 755) {
                                Router.push('/profile')
                            }
                        }}>

                            <Dropdown.Toggle as={"div"} variant="none" className={`${styles.dropdown_basic} ${styles.dropdown_no_padding}`} id="bootstrap-dropdown">
                                <div className={styles.item_holder + ' av-item'}>
                                    <Image alt="" className={styles.item_icon} src="/icons/profile.png" width="32" height="32" />
                                    <br />
                                    <b className={responsive.hide_on_sm}>Seu Perfil</b>
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={`${styles.dropdown_large} ${responsive.hide_on_sm}`}>
                                <div className='container mb-3'>
                                    <div className='mt-3'>

                                        <img alt="" className={`mx-3 rounded-circle ${styles.dropdown_avatar}`} src={userValue.avatar} width="128" height="128" />

                                        <div className="ms-3">
                                            <b>{userValue.name}</b>
                                            <br />
                                            <span>
                                                {userValue.title ? userValue.title : "Você não inseriu títulos no momento."}
                                            </span>
                                            <br />
                                        </div>

                                    </div>
                                    <Link href="/people">
                                        <a>
                                            <button className={`w-100 mt-2 btn btn-outline-dark ${styles.btn_border} ${styles.btn_nohover} rounded-pill`}>Visualizar perfil</button>
                                        </a>
                                    </Link>

                                    <div className="container">
                                        <div className="row row-cols-3 mt-3">
                                            <div className="col">
                                                <Link href="/account/accessibility">
                                                    <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                        <Image alt="" className={styles.item_icon} src="/icons/accessibility.png" width="32" height="32" />
                                                        <br />
                                                        <b>Acessibilidade</b>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link href="/account/language">
                                                    <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                        <Image alt="" className={styles.item_icon} src="/icons/language.png" width="32" height="32" />
                                                        <br />
                                                        <b>Idiomas</b>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link href="/account/configurations">
                                                    <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                        <Image alt="" className={styles.item_icon} src="/icons/gear.png" width="32" height="32" />
                                                        <br />
                                                        <b>Configurações de Conta</b>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="row row-cols-3 mt-3">
                                            <div className="col">
                                                <Link href="/account/privacy">
                                                    <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                        <Image alt="" className={styles.item_icon} src="/icons/lock.gif" width="32" height="32" />
                                                        <br />
                                                        <b>Privacidade</b>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <Link href="/help">
                                                    <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                        <Image alt="" className={styles.item_icon} src="/icons/help.png" width="32" height="32" />
                                                        <br />
                                                        <b>Ajuda</b>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <div onClick={() => {
                                                    logout()
                                                    Router.push('/start')
                                                }} className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item'}>
                                                    <Image alt="" className={styles.item_icon} src="/icons/exit.png" width="32" height="32" />
                                                    <br />
                                                    <b>Sair</b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Dropdown.Menu>

                        </Dropdown>

                        <Link href="/pro">
                            <div className={styles.item_holder + ' mx-lg-3 mx-md-1 mx-0 nav-item text-break'}>
                                <Image alt="" className={styles.item_icon} src="/icons/pro_user.gif" width="32" height="32" />
                                <br />
                                <b className={responsive.hide_on_sm}>PRO</b>
                            </div>
                        </Link>

                    </div>

                </div>
            </nav>
        </div>
    )
}