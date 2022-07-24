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
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../../config/axios'

//Abre o perfil do usuário

export default function People() {

    const { user } = useAppContext()
    const [userValue, setUserValue] = user

    const [formData, setFormData] = useState(userValue)

    useEffect(() => {
        setFormData(userValue)
    }, [user])

    function submitForm(e){
        e.preventDefault()
        axiosInstance.post('/client/redefine-user', formData).then((response)=>{
            setUserValue(formData)
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

                <main className={styles.main_white + ' ' + responsive.p1em_on_sm}>

                    <div className="text-center mb-3">
                        <h3>Editar perfil</h3>
                    </div>

                    <br />

                    <div className={"d-flex justify-content-center container-fluid w-75 " + responsive.dblock_on_sm}>

                        <Card class={cardstyles.card_s_50 + " card mb-3 me-2 " + responsive.w100_on_sm}>

                            <div className='d-flex justify-content-center'>
                                <img className={'mt-4 rounded-circle'} src={formData.avatar} width="128" height="128" />
                            </div>

                            <div className="card-body container text-start">



                                <label class="btn btn-dark w-100 mt-2 mb-3">
                                    <b>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mb-1 me-1 bi bi-camera-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                                        </svg>
                                        Adicionar Imagem
                                    </b>

                                    <input onChange={(e) => {

                                        const formSend = new FormData();
                                        formSend.append("avatar", e.target.files[0]);

                                        axiosInstance.post('/client/upload-avatar', formSend, {
                                            headers: {
                                                "Content-Type": "multipart/form-data"
                                            }
                                        }).then((response) => {
                                            setFormData({
                                                ...formData,
                                                avatar: process.env.NEXT_PUBLIC_BASEURL + '/media/uploads/' + response.data.filename
                                            })
                                        })

                                    }} hidden type="file" id="formFile" />

                                </label>

                                <div class="form-floating mb-3">
                                    <input
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        value={formData.name || ""}
                                        maxLength={60}
                                        type="email" class="form-control" id="floatingInput" placeholder="Nome" />
                                    <label for="floatingInput">Seu nome</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        value={formData.title || ""}
                                        maxLength={60}
                                        type="email" class="form-control" id="floatingInput" placeholder="Nome" />
                                    <label for="floatingInput">Título</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <textarea
                                        onChange={(e) => setFormData({ ...formData, biography: e.target.value })}
                                        value={formData.biography || ""}
                                        class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea">Biografia</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <select
                                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                        value={formData.gender} class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected>Selecione um gênero</option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Outros">Outros</option>
                                        <option value="Prefiro não dizer">Prefiro não dizer</option>
                                    </select>
                                    <label for="floatingSelect">Gênero</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <input
                                        disabled
                                        value={new Date(formData.birthday).toLocaleDateString('en-GB')}
                                        type="email" class="form-control" id="floatingInput" placeholder="Nome" />
                                    <label for="floatingInput">Data de Nascimento</label>
                                </div>

                                <div class="form-floating mb-3">
                                    <textarea
                                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                        value={formData.contact || ""}
                                        class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    <label for="floatingTextarea">Contato</label>
                                </div>

                                <button onClick={submitForm} className='btn btn-dark w-100 mb-2'>
                                    <b>Editar</b>
                                </button>

                                <button onClick={() => {
                                    setFormData(userValue)
                                }} className='btn w-100 mb-2'>
                                    <b>Descartar</b>
                                </button>

                            </div>
                        </Card>

                    </div>

                </main>

            </motion.div>
        </div>

    )
}