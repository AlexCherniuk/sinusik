import s from "./../Contact.module.css"

const Exhibition = (props) => {
    return (
        <div className={s.block}>
            <h2>{props.year}</h2>
            <div>{props.location}</div>
            <img width={100} height={100} src={props.images} alt="imagesses" />
        </div>
    )
}

export default Exhibition;