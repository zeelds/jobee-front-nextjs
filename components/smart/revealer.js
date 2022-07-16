import revealstyles from '../../styles/Reveal.module.css'
import jobeestyles from '../../styles/Jobee.module.css'
import Reveal from '../../components/reveal'

export default function Revealer(props) {

    return (

        <div className="form-floating">
            <input type="password" className={jobeestyles.input_default + " text-dark form-control border"} id={props.revId} placeholder="pass" />

            <div className={revealstyles.reveal_oninput} style={{ top: '17%', left: '80%' }}>
                <Reveal elemTarget={props.revId} />
            </div>

            <button className="btn"></button>
            <label htmlFor="password" className="text-dark">{props.field || "Senha"}</label>
        </div>

    )

}