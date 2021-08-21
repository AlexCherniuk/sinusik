import s from "./Exhibition.module.css";

const Kartinka = (props) => {
    return(
    <img src={props.img} alt="photocard"/>
)
}

const Exhibition = (props) => {
    let mapForImg = props.images.map(el => <Kartinka img= {el}/>)
    return (
        <div className={s.block}>
            <h2>{props.year}</h2>
            <div>{props.location}</div>
            <div className={s.image}>{mapForImg}</div>
        </div>
    )
}

export default Exhibition;