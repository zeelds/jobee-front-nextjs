import styles from '../../styles/Main.module.css'
import cardstyles from '../../styles/Card.module.css'
import responsive from '../../styles/Responsive.module.css'
import badgestyles from '../../styles/Badges.module.css'
import shapestyles from '../../styles/Shapes.module.css'
import jobeestyles from '../../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../../components/navbar'
import Card from '../../components/smart/card'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { axiosInstance } from '../../config/axios'

//Abre o perfil do usuário

export default function Article() {

    const router = useRouter()
    const { id } = router.query

    const [article, setArticle] = useState()
    const [comments, setComments] = useState([])
    const [owner, setOwner] = useState({})

    const [message, setMessage] = useState('')

    let returnedComments = []

    useEffect(() => {

        if (!id) return

        (async () => {
            const foundArticle = await axiosInstance.get('/article/find-article/' + id)
            setArticle(foundArticle.data.data.data)
            const foundOp = await axiosInstance.get('/client/get-user/' + foundArticle.data.data.data.author_id)
            setOwner(foundOp.data.data.foundUser.data)

            const getAllComments = await axiosInstance.get('/article/article-comments-list/' + id)

            const allComments = getAllComments.data.data.data

            // ! tem um problema onde os comentários vêm duplicados se vc tá vindo de outra rota
            // ! tenta não dar f5 pra ver

            await allComments.forEach(async (comment) => {
                const foundUser = await axiosInstance.get('/client/get-user/' + comment.author_id)
                const completeComment = { user: foundUser.data.data.foundUser.data, comment: comment }
                setComments(comments => [...comments, completeComment])
            })

        })()

    }, [id])

    function submitComment(e) {
        e.preventDefault()
        axiosInstance.post('/article/create-comment', { content: message, article_id: id }).then((response) => {
            console.log(response)
        })
    }

    if (!article) {
        return (
            <div className="bg-light">

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: '100%' }}
                    exit={{ opacity: 0 }}
                >

                    <Navbar />

                    <main className={styles.main_white + ' ' + responsive.p1em_on_sm}>

                    </main>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="bg-light">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white + ' ' + responsive.p1em_on_sm}>

                    <div className='container w-75'>

                        <Card class={cardstyles.card_s_100 + " card mb-3"}>
                            <div className="card-body">
                                <small>Postado por <a href={"/people/" + owner.id}>{owner.name}</a> · {new Date(article.createdAt).toLocaleDateString('en-GB')}</small>
                                <h4>{article && article.title}</h4>
                                {article && article.content}
                                <br />
                                <div className='mt-3'>
                                    {
                                        article.tags != undefined &&
                                        JSON.parse(article.tags).map((tag, index) => {
                                            return <span key={'tags-' + index} className={badgestyles.badge_bg_rainbow + " badge rounded-pill text-dark mx-1"}>{tag.name}</span>
                                        })
                                    }
                                </div>
                                <br />
                                <div className='mt-4 mb-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    </svg>
                                    <a className='ms-2 me-4'>{comments.length} comentários</a>
                                </div>
                                <hr />
                                <div className="form-floating mb-3">
                                    <textarea
                                        maxLength={50}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        type="email" className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Quais são seus pensamentos?" />
                                </div>
                                <button onClick={submitComment} className='btn btn-dark'>
                                    <b>Comentar</b>
                                </button>
                                <a className='ms-2'>como Mariliana</a>
                                <hr />

                                {
                                    Array.isArray(comments) &&
                                    comments.map((comment, index) => {
                                        return (
                                            <div key={"comment-" + index} className='mt-2 mb-2'>
                                                <img className='rounded-circle' src={comment.user.avatar} width="32" height="32" />
                                                <span className='ms-2'><a href={'/people/' + comment.user.id}>{comment.user.name}</a> · {new Date(comment.comment.createdAt).toLocaleDateString('en-GB')}</span>
                                                <div style={{ marginLeft: '40px' }}>
                                                    <p>
                                                        {comment.comment.content}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </Card>

                    </div>

                </main>

            </motion.div>
        </div>
    )
}