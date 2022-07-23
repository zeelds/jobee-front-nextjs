import { motion, useViewportScroll } from "framer-motion"
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import Link from 'next/link'
import { useState } from "react";

export default function Terms() {

    const { scrollYProgress } = useViewportScroll();
    const [opacity, setOpacity] = useState(0)

    scrollYProgress.onChange((e) => setOpacity(e * 200))

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 0, width: 0 }}
        >

            <main className={styles.main_yellow}>

                <div className='mb-5 float-start container'>
                    <Link href='/start'>
                        <a>
                            <motion.img
                                animate={{ opacity: 1 - opacity }}
                                className={styles.clickable + ' ' + styles.fixed_arrow} src='/arrow.png' />
                        </a>
                    </Link>
                </div>



                <div className={styles.center_text + ' container'}>

                    <div className={styles.article_white_container + ' container shadow-sm rounded-3 text-start'}>

                        <h2><strong>Termos e condições de uso do site ou blog</strong></h2>
                        <p> </p>
                        <p>Seja bem-vindo ao nosso site. Leia com muita atenção todos os termos abaixo.</p>
                        <p> </p>
                        <p>Este documento, e todo o conteúdo do site é oferecido por <strong>Jobee</strong>, neste termo representado apenas por &#34;EMPRESA&#34;, que regulamenta todos os direitos e obrigações com todos que acessam o site, denominado neste termo como &#34;VISITANTE&#34;, reguardado todos os direitos previstos na legislação, trazem as cláusulas abaixo como requisito para acesso e visita do mesmo, situado no endereço <strong>https://jobee-platform.herokuapp.com/.</strong></p>
                        <p> </p>
                        <p>A permanência no website implica-se automaticamente na leitura e aceitação tácita do presente termos de uso a seguir. Este termo foi atualizado pela última vez em 14 de setembro de 2021.</p>
                        <p> </p>
                        <h3><strong>1. DA FUNÇÃO DO SITE</strong></h3>
                        <p> </p>
                        <p>Este site foi criado e desenvolvido com a função de trazer conteúdo informativo de alta qualidade, a venda de produtos físicos, digitais e a divulgação de prestação de serviço. A EMPRESA busca através da criação de conteúdo de alta qualidade, desenvolvido por profissionais da área, trazer o conhecimento ao alcance de todos, assim como a divulgação dos próprios serviços.</p>
                        <p> </p>
                        <p>Nesta plataforma, poderá ser realizado tanto a divulgação de material original de alta qualidade, assim como a divulgação de produtos de e-commerce.</p>
                        <p> </p>
                        <p>Todo o conteúdo presente neste site foi desenvolvido buscando fontes e materiais de confiabilidade, assim como são baseados em estudos sérios e respeitados, através de pesquisa de alta nível.</p>
                        <p> </p>
                        <p>Todo o conteúdo é atualizado periodicamente, porém, pode conter em algum artigo, vídeo ou imagem, alguma informação que não reflita a verdade atual, não podendo a EMPRESA ser responsabilizada de nenhuma forma ou meio por qualquer conteúdo que não esteja devidamente atualizado.</p>
                        <p> </p>
                        <p>É de responsabilidade do usuário de usar todas as informações presentes no site com senso crítico, utilizando apenas como fonte de informação, e sempre buscando especialistas da área para a solução concreta do seu conflito.</p>
                        <p> </p>
                        <h3>2. <strong>DO ACEITE DOS TERMOS</strong></h3>
                        <p> </p>
                        <p>Este documento, chamado &#34;Termos de Uso&#34;, aplicáveis a todos os visitantes do site, foi desenvolvido por <a href="https://diegocastro.adv.br/">Diego Castro</a> Advogado - OAB/PI 15.613, modificado com permissão para este site.</p>
                        <p> </p>
                        <p>Este termo especifica e exige que todo usuário ao acessar o site da EMPRESA, leia e compreenda todas as cláusulas do mesmo, visto que ele estabelece entre a EMPRESA e o VISITANTE direitos e obrigações entre ambas as partes, aceitos expressamente pelo VISITANTE a permanecer navegando no site da EMPRESA.</p>
                        <p> </p>
                        <p>Ao continuar acessando o site, o VISITANTE expressa que aceita e entende todas as cláusulas, assim como concorda integralmente com cada uma delas, sendo este aceite imprescindível para a permanência na mesma. Caso o VISITANTE discorde de alguma cláusula ou termo deste contrato, o mesmo deve imediatamente interromper sua navegação de todas as formas e meios.</p>
                        <p> </p>
                        <p>Este termo pode e irá ser atualizado periodicamente pela EMPRESA, que se resguarda no direito de alteração, sem qualquer tipo de aviso prévio e comunicação. É importante que o VISITANTE confira sempre se houve movimentação e qual foi a última atualização do mesmo no começo da página.</p>
                        <p> </p>
                        <h3><strong>3. DO GLOSSÁRIO</strong></h3>
                        <p> </p>
                        <p>Este termo pode conter algumas palavras específicas que podem não se de conhecimento geral. Entre elas:</p>
                        <p> </p>
                        <ul>
                            <li><strong>VISITANTE: </strong>Todo e qualquer usuário do site, de qualquer forma e meio, que acesse através de computador, notebook, tablet, celular ou quaisquer outros meios, o website ou plataforma da empresa.</li>
                            <li><strong>NAVEGAÇÃO: </strong>O ato de visitar páginas e conteúdo do website ou plataforma da empresa.</li>
                            <li><strong>COOKIES:</strong> Pequenos arquivos de textos gerados automaticamente pelo site e transmitido para o navegador do visitante, que servem para melhorar a usabilidade do visitante.</li>
                            <li><strong>LOGIN:</strong> Dados de acesso do visitante ao realizar o cadastro junto a EMPRESA, dividido entre usuário e senha, que dá acesso a funções restritas do site.</li>
                            <li><strong>HIPERLINKS: </strong>São links clicáveis que podem aparecer pelo site ou no conteúdo, que levam para outra página da EMPRESA ou site externo.</li>
                            <li><strong>OFFLINE:</strong> Quando o site ou plataforma se encontra indisponível, não podendo ser acessado externamente por nenhum usuário.</li>
                        </ul>

                    </div>

                </div>

            </main>


        </motion.div>
    )

}