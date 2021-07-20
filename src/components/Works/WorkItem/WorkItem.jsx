import s from './../Works.module.css'


const WorkItem = (props) => {
    return (
        <div className={s.block}> 
            <img src={props.src} alt="pictures"/>
            <p>{props.title}</p>
        </div> 
    );
}
export default WorkItem