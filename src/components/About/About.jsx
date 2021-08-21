import s from "./About.module.css"

const About = (props) => {
    return (
        <div className={s.block}>
            <p className={s.text}>{props.about}</p>
        </div>
            )
}
export default About;