import s from "./AppLoader.module.scss";

export default function AppLoader() {
    return (
        <div id={s.app_loading}>
            <div className={s.loading_dots}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}