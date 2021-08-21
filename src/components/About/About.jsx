import s from "./About.module.css"
import img from ""

const About = (props) => {
    return (
        <div className={s.block}>
            <p className={s.text}>{props.about}</p>
        </div>
            )
}
export default About;