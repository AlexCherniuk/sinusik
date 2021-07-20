import s from './Contact.module.css'
import Exhibition from './Exhibition/Exhibition'




const Contact = (props) => {
    let exhibitions = props.data.map(el => <Exhibition  year={el.year} location={el.location} images={el.images}/>)
    
    return (
        <div className={s.block}>
            {exhibitions}
        </div>
    )
}

export default Contact;