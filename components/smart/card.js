
export default function Card(props) {

    return (
        <div className={props.class || ''}>
            {props.img ?
                <img src={props.img} className="card-img-top" alt="card-image" />
                :
                <></>
            }
            {props.children}
        </div>
    )

}