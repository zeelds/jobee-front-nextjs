import styles from '../../styles/Main.module.css'
import cardstyles from '../../styles/Card.module.css'
import jobeestyles from '../../styles/Jobee.module.css'
import { motion } from "framer-motion"
import Navbar from '../../components/navbar'
import Card from '../../components/smart/card'
import Link from 'next/link'
import { msConfig } from '../main'
import { useState } from 'react'

//Ele abre um perfil em específico

export const EditArticle = () => {

    const [writtenArticle, setWrittenArticle] = useState({
        title: '',
        content: '',
        tags: []
    })

    function submitArticle(e) {
        e.preventDefault()

        axiosInstance.post('/article/create-article', { ...writtenArticle, status: 'publicado' })
            .then((response) => {

            })

    }

    return (
        <Card class={cardstyles.card_s_100 + " card mb-3"}>
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
                    showCheckbox={true}
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
                    <b>Enviar</b>
                </button>
                <a className="btn rounded-pill border border-dark border-2">

                    <b>{200 - writtenArticle.content.length}</b>

                </a>
            </div>
        </Card>
    )

}