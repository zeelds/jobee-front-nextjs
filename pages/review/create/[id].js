import cardstyles from '../../../styles/Card.module.css'
import Card from '../../../components/smart/card'
import responsive from '../../../styles/Responsive.module.css'
import styles from '../../../styles/Main.module.css'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../../../config/axios'
import { motion } from 'framer-motion'
import Navbar from '../../../components/navbar';
import ReactStars from "react-rating-stars-component";
import Image from 'next/image'
import Router, { useRouter } from 'next/router';
import { useAppContext } from '../../_app'

//Ele abre um perfil em específico

export default function CreateReview() {

    const {user} = useAppContext()
    const [userValue] = user

    const router = useRouter()
    const { id } = router.query

    const [writtenReview, setWrittenReview] = useState({
        content: '',
        stars: 0
    })

    const [targetUser, setTargetUser] = useState()

    useEffect(()=>{
        (async()=>{
            const foundUser = await axiosInstance.get('/client/get-user/'+id)
            setTargetUser(foundUser.data.data.foundUser.data)
        })()
    },[id])

    function submitForm(e){
        e.preventDefault()
        axiosInstance.post('/client/write-review', {
            ...writtenReview,
            reviewed_id: id,
        }).then((response)=>{
            Router.push('/people/'+id)
        })
    }

    if(!targetUser){
        return
    }

    return (

        <div className="bg-light">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white}>

                    <div className="text-center mb-3">
                        <h3>Avaliar {targetUser.name.split(' ')[0]}</h3>
                    </div>

                    <br />

                    <div className="d-flex justify-content-center">

                        <Card class={cardstyles.card_s_50 + " card mb-3 " + responsive.w75_on_sm}>

                            <div className="card-body">

                                <div className="text-center">
                                    <img alt="" onError={"this.src='/avatar/default.png'"} className="rounded-circle" src={targetUser.avatar} width="128" height="128" />
                                </div>

                                <div className="d-flex justify-content-center">
                                    <ReactStars
                                        count={5}
                                        size={48}
                                        onChange={(e)=>setWrittenReview({...writtenReview, stars: e})}
                                        activeColor="black"
                                        color="rgb(188,188,188)"
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea
                                        maxLength={150}
                                        onChange={(e) => setWrittenReview({ ...writtenReview, content: e.target.value })} value={writtenReview.content} type="email" className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Tem algo para contar?" />
                                </div>
                                <button onClick={submitForm} className="btn btn-dark me-2">
                                    <b>Enviar</b>
                                </button>
                                <a className="btn rounded-pill border border-dark border-2">

                                    <b>{150 - writtenReview.content.length}</b>

                                </a>
                                <button className="btn me-2 float-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>
                                    <b onClick={() => {
                                        const userChoice = confirm(`Você tem certeza que deseja descartar a avaliação?`)
                                        if (userChoice) {
                                            Router.push('/people/'+id)
                                        }
                                    }} className='ms-2'>Descartar</b>
                                </button>
                            </div>
                        </Card>

                    </div>


                </main>

            </motion.div>

        </div>

    )

}