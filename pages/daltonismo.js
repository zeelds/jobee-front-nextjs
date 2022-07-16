import { useState } from "react"
import redstyles from "../styles/daltonismo/Home.module.css"
import bluestyles from "../styles/default/Home.module.css"

export default function Daltonismo() {

    const [teste, setTeste] = useState(bluestyles)

    return (
        <button className={teste.btn_color}>teste</button>
    )

}