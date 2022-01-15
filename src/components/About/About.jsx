import s from "./About.module.css"

const About = (props) => {
    return (
        <div className={s.block}>
            <p className={s.text}>{props.about.aboutData}</p>
            <img src={props.about.photo} alt="vova phot"></img>
        </div>
            )
}
export default About;