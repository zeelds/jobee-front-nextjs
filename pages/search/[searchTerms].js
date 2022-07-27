import styles from '../../styles/Main.module.css'
import cardstyles from '../../styles/Card.module.css'
import responsive from '../../styles/Responsive.module.css'
import jobeestyles from '../../styles/Jobee.module.css'
import badgestyles from '../../styles/Badges.module.css'
import { motion } from "framer-motion"
import Navbar from '../../components/navbar'
import Card from '../../components/smart/card'
import Link from 'next/link'
import { useAppContext } from '../_app'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../../config/axios'
import ReactStars from "react-rating-stars-component";
import Image from 'next/image'
import pronounFix from '../../utils/pronounFix'
import starsAverage from '../../utils/starsAvg'
import Router, { useRouter } from 'next/router'

//Abre o perfil do usuário

export default function Search() {

    const router = useRouter()
    const { searchTerms } = router.query

    const [result, setResult] = useState({
        people: [],
        articles: []
    })

    useEffect(() => {
        (
            async () => {

                if (!searchTerms) return

                const searchResults = await axiosInstance.post('/search', { searchTerms: searchTerms.split(' ') })
                setResult({ people: searchResults.data.filteredUsers, articles: searchResults.data.filteredArticles })
            }
        )()
    }, [searchTerms])

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

                        {result.people.map((result, index) => {
                            return (

                                <Card class={cardstyles.card_s_50 + " card mb-3 me-2 " + responsive.w100_on_sm}>
                                    <div className="card-body text-center">

                                        <img src={result.avatar} width="64" height="64" className='rounded-circle' />

                                        <Link href={"/people/"+result.id}>
                                            <h4>
                                                {result.name}
                                            </h4>
                                        </Link>

                                        {result.title}
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