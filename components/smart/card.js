import cardstyles from '../../styles/Card.module.css'

export default function Card(props) {

    return (
        <div className={props.class || ''}>
            {props.img ?
                <img onError={"this.src='/avatar/default.png'"} src={props.img} className={`card-img-top ${props.proBorder ? 'border border-1 ' + cardstyles.pro_border : ''}`} alt="" />
                :
                <></>
            }
            {props.children}
        </div>
    )

}