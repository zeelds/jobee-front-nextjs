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

                        {searchTerms}

                    </div>

                </main>

            </motion.div>
        </div>
    )
}