import { useEffect, useState } from "react"
import styles from "../styles/Reveal.module.css"

export default function Reveal(props) {

    const [reveal, setReveal] = useState(1)
    const [hidden, setHidden] = useState(true)

    function toggleReveal() {
        if (hidden) {
            setHidden(false)
            document.getElementById(props.elemTarget).type = 'text'
        } else {
            setHidden(true)
            document.getElementById(props.elemTarget).type = 'password'
        }
        changeReveal()
    }

    function changeReveal() {

        if (hidden) {
            for(let i=1; i<=17; i++){
                setTimeout(()=>{setReveal(i)},25*i)
            }
        } else {
            for(let i=17; i>=1; i--){
                setTimeout(()=>{setReveal(i)},25*(17-i))
            }
        }

    }

    return (
        <>
            <a className={styles.item_nobg} onClick={toggleReveal}>
                <img alt="" id="eye" src={`/icons/reveal/frame${reveal}.png`} width="32" height="32" />
            </a>
        </>
    )
}