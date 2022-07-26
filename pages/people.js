import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import responsive from '../styles/Responsive.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import badgestyles from '../styles/Badges.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'
import Card from '../components/smart/card'
import Link from 'next/link'
import { useAppContext } from './_app'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axios'
import ReactStars from "react-rating-stars-component";
import Image from 'next/image'
import pronounFix from '../utils/pronounFix'
import starsAverage from '../utils/starsAvg'

//Abre o perfil do usuário

export default function People() {

    const { user, accessibility } = useAppContext()
    const [userValue, setUserValue] = user
    const [accessibilityValue, setAccessibilityValue] = accessibility
    const [review, setReview] = useState({
        average: 0,
        list: []
    })

    const [latest, setLatest] = useState([])

    useEffect(() => {
        (async () => {
            await axiosInstance.get('/client/reviews-list').then(async (response) => {
                const stars = await starsAverage(response.data.data.data)
                setReview({ ...review, average: stars })
                setReview({ ...review, list: response.data.data.data })
            })
            await axiosInstance.get('/article/articles-list').then(async (response) => {
                setLatest(response.data.data.data)
            })
        })()
    }, [user])

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

                        <Card class={cardstyles.card_s_50 + " card mb-3 me-2 " + responsive.w100_on_sm} img={userValue.avatar}>
                            <div className="card-body text-center">

                                <h4>
                                    {userValue.name}
                                    <Link href="/profile/edit">
                                        <svg className={"ms-2 bi bi-pencil-fill position-top " + styles.clickable} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                    </Link>
                                </h4>

                                <div className={'d-flex justify-content-center mb-3 text-break ' + responsive.font_smaller_on_sm}>

                                    <div className='me-3 text-center'>
                                        <b>{accessibilityValue.pronouns}</b>
                                        <br />
                                        Pronome
                                    </div>

                                    <div className="vr ms-2 me-2" />

                                    <div className='ms-2 me-3 text-center'>
                                        <b>{review.average}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={"ms-1 bi bi-star-fill align-text-top " + responsive.hide_on_sm} viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </b>
                                        <br />
                                        Avaliação
                                    </div>

                                    <div className="vr ms-2 me-2" />

                                    <div className='ms-2 text-center'>
                                        <b>{new Date(userValue.createdAt).toLocaleDateString('en-GB')}</b>
                                        <br />
                                        {pronounFix(accessibilityValue.pronouns, 'Usuário/Usuária/Usuárie') + ' desde'}
                                    </div>

                                </div>

                                <div align="center">
                                    <div className="text-start w-75">
                                        <h6><b>Um pouco sobre você</b></h6>
                                        <p>
                                            {userValue.biography ? userValue.biography : "Esse usuário não inseriu a biografia no momento."}
                                        </p>
                                        <h6><b>Contatos</b></h6>
                                        <p>
                                            {userValue.contact ? userValue.contact : "Esse usuário não inseriu nenhuma informação de contato no momento."}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </Card>

                        <Card class={cardstyles.card_s_50 + " rounded-0 card mb-3 " + responsive.w100_on_sm}>
                            <div className="card-body text-center">

                                <div className='mt-3'>

                                    <h5 className='mb-3'>Últimos artigos</h5>

                                    {latest.slice(0,4).map((article, index) => {
                                        return (
                                            <Link href={"/article/" + article.id}>
                                                <a>
                                                    <div className='w-100 mt-2 mb-2'>
                                                        <Card class={cardstyles.card_s_100 + " card mb-3 container p-3 rounded-2"}>
                                                            <b>{article.title}</b>
                                                            <div className='mt-3'>

                                                                {
                                                                    JSON.parse(article.tags).map((tag, index) => {
                                                                        return (
                                                                            <span key={'tags-' + index} className={badgestyles.badge_bg_rainbow + " badge rounded-pill text-dark mx-1"}>{tag.name}</span>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </Card>
                                                    </div>
                                                </a>
                                            </Link>

                                        )
                                    })}

                                </div>


                            </div>
                        </Card>

                    </div>

                    <div className='d-flex justify-content-center'>
                        <hr className='w-75' />
                    </div>

                    <div className={" container-fluid w-75 " + responsive.dblock_on_sm}>

                        <h4 className='mb-4'>Avaliações recebidas</h4>

                        {review.list.map((element) => {
                            return (
                                <Card class={cardstyles.card_s_100 + " card mb-3 " + responsive.w100_on_sm}>
                                    <div className="card-body">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            edit={false}
                                            value={Math.round(element.stars)}
                                            activeColor="black"
                                            color="rgb(188,188,188)"
                                        />
                                        <b className='mt-2'>
                                            {element.content}
                                        </b>
                                        <br className='mb-2' />
                                        <span>
                                            - Avaliação realizada em {new Date(element.createdAt).toLocaleDateString('en-GB')}
                                        </span>
                                    </div>
                                </Card>
                            )
                        })}



                    </div>


                </main>

            </motion.div>
        </div>
    )
}