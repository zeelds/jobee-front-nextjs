import styles from '../styles/Main.module.css'
import cardstyles from '../styles/Card.module.css'
import jobeestyles from '../styles/Jobee.module.css'
import badgestyles from '../styles/Badges.module.css'
import { motion } from "framer-motion"
import Navbar from '../components/navbar'
import Card from '../components/smart/card'
import Link from 'next/link'
import responsive from '../styles/Responsive.module.css'
import Head from 'next/head'
import Multiselect from 'multiselect-react-dropdown';
import { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axios'

export default function Main(props) {

    const [articles, setArticles] = useState([])

    useEffect(() => {

        axiosInstance.get('/article/articles-list/')
            .then((response) => {
                setArticles(response.data.data.data)
            })

    }, [])

    return (
        <div className="bg-light">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: '100%' }}
                exit={{ opacity: 0 }}
            >

                <Navbar />

                <main className={styles.main_white + ' ' + responsive.p1em_on_sm}>

                    <div className={styles.display_flex + ' container mb-5 ' + responsive.dblock_on_sm}>

                        <div>

                            <Card class={cardstyles.card_s_75 + " card mb-3 " + responsive.w100_on_sm} img="/avatar/komi.jpg">
                                <div className="card-body">
                                    <h4>Dona Célia</h4>
                                    <h6><b>Sobre mim</b></h6>
                                    <p>
                                        Dona Célia é uma ótima costureira de 63 anos que tem um amor muito grande pelo que faz.
                                    </p>
                                    <h6><b>Qualificações</b></h6>
                                    <p>
                                        Esse usuário não inseriu nenhuma qualificação no momento.
                                    </p>
                                    <button className={'btn w-100 ' + jobeestyles.btn_yellow}>
                                        <b>Escrever artigo</b>
                                    </button>
                                    <button className={'btn w-100 '}>
                                        <b>Buscar vagas</b>
                                    </button>
                                </div>
                            </Card>

                        </div>

                        <div className={cardstyles.card_s_100}>

                            <Link href="/pro">
                                <a>
                                    <Card class={cardstyles.card_s_100 + " card mb-3"}>
                                        <div className="card-body">
                                            <h4>Assine o Jobee PRO</h4>
                                            O Jobee PRO é uma experiência adquirida por pagamento único que oferece aos nossos clientes mais fiéis acesso exclusivo a recursos premium e personalizações adicionais.
                                            <br />
                                            <div className='mt-3'>
                                                <span className={jobeestyles.ad_badge + " badge rounded-pill text-dark mx-1"}>Anúncio📢</span>
                                            </div>
                                        </div>
                                    </Card>
                                </a>
                            </Link>

                            <WriteArticle articles={articles} setArticles={setArticles} />

                            {articles.map((article) => {
                                return (
                                    <ShowArticle id={article.id} title={article.title} content={article.content} tags={article.tags} />
                                )
                            })}

                        </div>

                    </div>

                </main>

            </motion.div>
        </div>
    )
}

export const ShowArticle = (props) => {

    return (
        <Link href={"/find-article/" + props.id}>
            <a>
                <Card class={cardstyles.card_s_100 + " card mb-3"}>
                    <div className="card-body">
                        <h4>{props.title}
                            <Link href={"/article/edit/" + props.id}>
                                <svg className="ms-2 bi bi-pencil-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                            </Link>
                        </h4>
                        {props.content}
                        <br />
                        <div className='mt-3'>
                            {
                                !Array.isArray(props.tags) ?
                                    JSON.parse(props.tags).map((tag) => {
                                        return (
                                            <span className={badgestyles.badge_bg_rainbow + " badge rounded-pill text-dark mx-1"}>{tag.name}</span>
                                        )
                                    })
                                    :
                                    props.tags.map((tag) => {
                                        return (
                                            <span className={badgestyles.badge_bg_rainbow + " badge rounded-pill text-dark mx-1"}>{tag.name}</span>
                                        )
                                    })
                            }
                        </div>
                    </div>
                </Card>
            </a>
        </Link>
    )

}

export const msConfig = {
    options: [
        { name: 'Diversão', id: 0, theme: "common" },
        { name: 'Pintor', id: 1, theme: "common" },
        { name: 'Pedreiro', id: 2, theme: "common" },
        { name: 'Costura', id: 3, theme: "common" },
        { name: 'Desenvolvedor', id: 4, theme: "common" },
        { name: 'Designer Gráfico', id: 5, theme: "common" },
        { name: 'Cabeleleiro', id: 6, theme: "common" },
        { name: 'Trancista', id: 7, theme: "common" },
        { name: 'Vaga', id: 8, theme: "common" },
        { name: 'Designer Gráfico', id: 9, theme: "common" },
        { name: 'Designer Web', id: 10, theme: "common" },
        { name: 'Designer de Moda', id: 11, theme: "common" },
        { name: 'Designer de Interiores', id: 12, theme: "common" },
        { name: 'Designer de Unhas', id: 13, theme: "common" },
        { name: 'Manicure', id: 14, theme: "common" },
        { name: 'Pedicure', id: 15, theme: "common" },
        { name: 'Cuidador Infantil', id: 16, theme: "common" },
        { name: 'Cuidador de Idosos', id: 17, theme: "common" },
        { name: 'Artes Visuais', id: 18, theme: "common" },
        { name: 'Marketing', id: 19, theme: "common" },
        { name: 'Servente', id: 20, theme: "common" },
        { name: 'Vendedor', id: 21, theme: "common" },
        { name: 'Feirante', id: 22, theme: "common" },
        { name: 'Doméstica', id: 23, theme: "common" },
        { name: 'Panfleteiro', id: 24, theme: "common" },
        { name: 'Cozinheiro', id: 25, theme: "common" },
        { name: 'Entregador', id: 26, theme: "common" },
        { name: 'Motorista', id: 27, theme: "common" },
        { name: 'Criador de Conteúdo', id: 28, theme: "common" },
        { name: 'PCD 👨‍🦽', id: 29, theme: "common" },
        { name: 'LGBTQIA+ 🌈', id: 30, theme: "common" },
        { name: '#BlackLivesMatter ✊🏿', id: 31, theme: "common" },
        { name: 'Porteiro', id: 32, theme: "common" },
        { name: 'Vigia', id: 33, theme: "common" },
        { name: 'Economista', id: 34, theme: "common" },
        { name: 'Ator', id: 35, theme: "common" },
        { name: 'Restaurante', id: 36, theme: "common" },
        { name: 'Atendente', id: 37, theme: "common" },
        { name: 'Cantor', id: 38, theme: "common" },
        { name: 'Músico', id: 39, theme: "common" },
        { name: 'Barbeiro', id: 40, theme: "common" },
        { name: 'Informática', id: 41, theme: "common" },
        { name: 'Eletricista', id: 42, theme: "common" },
        { name: 'Encanador', id: 43, theme: "common" },
        { name: 'Mecânico', id: 44, theme: "common" },
        { name: 'COVID-19 😷', id: 45, theme: "common" },
        { name: 'Coach', id: 46, theme: "common" },
        { name: 'Enfermagem', id: 47, theme: "common" },
        { name: 'Atleta', id: 48, theme: "common" },
        { name: 'Ilustração', id: 49, theme: "common" },
        { name: 'Animação', id: 50, theme: "common" },
        { name: 'Fotografia', id: 51, theme: "common" },
        { name: 'Teatro', id: 51, theme: "common" },
        { name: 'Orgulho Trans 🏳️‍⚧️', id: 30, theme: "common" },
    ]
};

export const WriteArticle = (props) => {

    const articles = props.articles
    const setArticles = props.setArticles

    const [options, setOptions] = useState(msConfig.options)

    const [writtenArticle, setWrittenArticle] = useState({
        title: '',
        content: '',
        tags: []
    })

    function submitArticle(e) {
        e.preventDefault()

        axiosInstance.post('/article/create-article', { ...writtenArticle, status: 'publicado' })
            .then((response) => {
                setWrittenArticle({
                    title: '',
                    content: '',
                    tags: []
                })
                setArticles([response.data.data.data, ...articles])
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
                    options={options}
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