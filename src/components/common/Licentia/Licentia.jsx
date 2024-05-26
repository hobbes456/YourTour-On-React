import Image from "next/image";
import Link from "next/link";

import svg from "@/constants/svg";

import s from "./Licentia.module.scss";

const Licentia = ({width, value, onChange}) => {
    const {squaredButtonYes, squaredButtonNo, squaredButtonYesSmall, squaredButtonNoSmall} = svg

    let matchingSvg;

    if (width < 770) {
        matchingSvg = value ? squaredButtonYesSmall : squaredButtonNoSmall;
    } else {
        matchingSvg = value ? squaredButtonYes : squaredButtonNo;
    }

    return (
        <div className={s.licentia}>
            <input 
                name="checkbox"
                type="checkbox"
                value={value}
                id="checkbox"
                checked={value}
                onChange={(event) => onChange(event.target.value)}/>
            <label className={s.licentia__checkbox} htmlFor="checkbox">
                <Image
                    src={matchingSvg.src}
                    alt="checkbox"
                    width={matchingSvg.width}
                    height={matchingSvg.height}/>
            </label>
            <p className={s.licentia__text}>Нажимая кнопку, я принимаю условия
                <label> </label>
                <Link className={s.licentia__link} href="#licentia">Лицензионного договора</Link>
            </p>
        </div>
    );
}

export default Licentia;