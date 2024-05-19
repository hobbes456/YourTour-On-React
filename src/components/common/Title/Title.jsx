import s from "./Title.module.scss";

const Title = () => {
    return (
        <div className={s.title}>
            <h2 className={s.title__title}>Собери свой тур</h2>
            <p className={s.title__subtitle}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
        </div>
    )
}

export default Title;