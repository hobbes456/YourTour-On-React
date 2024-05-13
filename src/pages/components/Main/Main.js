import s from "./Main.module.scss";
import Header from "../Header";

export default function Main() {
    const style = {
        fonstSize: "50px",
        color: "red"
    }

    return (
        <div className={s.main}>
            <Header/>
        </div>
    )
}
