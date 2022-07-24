import styles from '../../styles/Main.module.css'
import cardstyles from '../../styles/Card.module.css'
import responsive from '../../styles/Responsive.module.css'
import shapestyles from '../../styles/Shapes.module.css'
import jobeestyles from '../../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../../components/navbar'
import Card from '../../components/smart/card'
import Link from 'next/link'
import { useAppContext } from '../_app'
import pronounFix from '../../utils/pronounFix'

//Abre o perfil do usuário

export default function People() {

    const { user, accessibility } = useAppContext()
    const [userValue, setUserValue] = user
    const [accessibilityValue, setAccessibilityValue] = accessibility

    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white + ' ' + responsive.p1em_on_sm}>

                    <div className={"d-flex justify-content-center container-fluid w-75 " + responsive.dblock_on_sm}>

                        <Card class={cardstyles.card_s_50 + " card mb-3 me-2 " + responsive.w100_on_sm} img={userValue.avatar} proBorder={true}>
                            
                            <button className={'position-absolute rounded-0 btn w-100 mb-2 ' + jobeestyles.premium_badge}>
                                <b>{pronounFix(accessibilityValue.pronouns, "Usuário/Usuária/Usuárie") + ' PRO'}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1 bi bi-star-fill align-text-top" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                                </b>
                            </button>

                            <div className="card-body text-center">

                                <h4>
                                    {userValue.name}
                                    <svg className="ms-2 bi bi-pencil-fill position-top" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                    </svg>
                                </h4>

                                <div className={'d-flex justify-content-center mb-3 text-break ' + responsive.font_smaller_on_sm}>

                                    <div className='me-3 text-center'>
                                        <b>{accessibilityValue.pronouns}</b>
                                        <br />
                                        Pronome
                                    </div>

                                    <div className="vr ms-2 me-2" />

                                    <div className='ms-2 me-3 text-center'>
                                        <b>4.8
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={"ms-1 bi bi-star-fill align-text-top " + responsive.hide_on_sm} viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </b>
                                        <br />
                                        Avaliação
                                    </div>

                                    <div className="vr ms-2 me-2" />

                                    <div className='ms-2 text-center'>
                                        <b>8 meses</b>
                                        <br />
                                        Serviço
                                    </div>
                                </div>

                                <div align="center">
                                    <div className="text-start w-75">
                                        <h6><b>Um pouco sobre {userValue.name.split(' ')[0]}</b></h6>
                                        <p>
                                            {userValue.biography ? userValue.biography : "Esse usuário não inseriu a biografia no momento."}
                                        </p>
                                        <h6><b>Contatos</b></h6>
                                        <p>
                                            {userValue.contact ? userValue.contact : "Esse usuário não inseriu nenhuma informação de contato no momento."}
                                        </p>
                                        <button className={'btn w-100 mb-2 ' + jobeestyles.btn_yellow}>
                                            <b>Avaliar
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1 bi bi-star-fill align-text-top" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
                                            </b>
                                        </button>
                                        <button className={'btn w-100 mb-2 '}>
                                            <b>
                                                Reportar
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-1 bi bi-flag-fill" viewBox="0 0 16 16">
                                                    <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
                                                </svg>
                                            </b>
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </Card>

                        <Card class={cardstyles.card_s_50 + " card mb-3 " + responsive.w100_on_sm}>
                            <div className="card-body">
                                Marília tem 72 comentários. Marília costuma interagir com as seguintes tags. Marília é avaliada positivamente 72% das vezes. Marília é avaliada negativamente 10% das vezes.
                            </div>
                        </Card>

                    </div>


                </main>

            </motion.div>
        </div>
    )
}