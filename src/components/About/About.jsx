import s from "./About.module.css"


const About = (props) => {
    return (
        <div className={s.block}>
            <ul className={s.text}>
            <a href="/">sinusikvova@gmail.com</a> 
            <li>lsdfsj;d</li>
            <li>{props.about}</li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </div>
            )
}
export default About;