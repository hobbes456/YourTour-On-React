import s from "./Title.module.scss";

const Title = ({text}) => {
    return (
        <div className={s.title}>
            <h2 className={s.title__title}>{text}</h2>
            <p className={s.title__subtitle}>{"Идейные соображения высшего порядка, a"} <br/> {"также рамки и место обучения кадров"}</p>
        </div>
    )
}

export default Title;