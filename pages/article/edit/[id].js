import cardstyles from '../../../styles/Card.module.css'
import Card from '../../../components/smart/card'
import responsive from '../../../styles/Responsive.module.css'
import styles from '../../../styles/Main.module.css'
import Multiselect from 'multiselect-react-dropdown';
import { useEffect, useState } from 'react'
import { axiosInstance } from '../../../config/axios'
import { msConfig } from '../../main';
import { motion } from 'framer-motion'
import Navbar from '../../../components/navbar';
import { useRouter } from 'next/router';

//Ele abre um perfil em específico

export default function EditArticle() {

    const router = useRouter()
    const { id } = router.query

    const [writtenArticle, setWrittenArticle] = useState({
        title: '',
        content: '',
        tags: []
    })

    useEffect(() => {
        if(id == undefined) return
        axiosInstance.get('/article/find-article/' + id)
            .then((response) => {
                setWrittenArticle({
                    title: response.data.data.data.title,
                    content: response.data.data.data.content,
                    tags: JSON.parse(response.data.data.data.tags)
                })
            })
    }, [id])

    function submitArticle(e) {
        e.preventDefault()

        axiosInstance.post('/article/update-article', { id: id, ...writtenArticle, status: 'publicado' })
            .then((response) => {

            })

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
                        <h3>Editar artigo</h3>
                    </div>

                    <br />

                    <div className="d-flex justify-content-center">


                        <Card class={cardstyles.card_s_50 + " card mb-3"}>

                            <div className="card-body">
                                <div className="form-floating mb-3">
                                    <input
                                        maxLength={60}
                                        onChange={(e) => setWrittenArticle({ ...writtenArticle, title: e.target.value })} value={writtenArticle.title} type="email" className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="Dê um título" />
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea
                                        maxLength={200}
                                        onChange={(e) => setWrittenArticle({ ...writtenArticle, content: e.target.value })} value={writtenArticle.content} type="email" className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="O que está acontecendo?" />
                                </div>
                                <Multiselect
                                    selectedValues={writtenArticle.tags}
                                    onSelect={(e) => setWrittenArticle({ ...writtenArticle, tags: e })}
                                    onRemove={(e) => setWrittenArticle({ ...writtenArticle, tags: e })}
                                    placeholder="Tags"
                                    className={`mb-3 ${responsive.responsive_select}`}
                                    options={msConfig.options}
                                    displayValue="name"
                                    selectionLimit="4"
                                    emptyRecordMsg="Nenhuma tag foi encontrada."
                                    style={{
                                        chips: {
                                            background: 'black',
                                            fontWeight: '700'
                                        },
                                        multiselectContainer: {
                                            color: 'white'
                                        },
                                        optionContainer: { // To change css for option container 
                                            position: 'absolute',
                                            maxHeight: '115px',
                                            width: '100%',
                                            background: 'white',
                                            color: 'black'
                                        },
                                        option: {
                                            color: 'black',
                                            background: 'white',
                                        },
                                        searchBox: {
                                            border: 'none',
                                            'border-bottom': '1px solid black',
                                        }
                                    }}
                                />
                                <button onClick={submitArticle} className="btn btn-dark me-2">
                                    <b>Editar</b>
                                </button>
                                <a className="btn rounded-pill border border-dark border-2">

                                    <b>{200 - writtenArticle.content.length}</b>

                                </a>
                            </div>
                        </Card>

                    </div>


                </main>

            </motion.div>

        </div>

    )

}