import Image from "next/image";

import { radioItems } from "@/constants/radioItems";
import svg from "@/constants/svg";

import s from "./RadioGroup.module.scss";

const RadioGroup = ({width, value, onChange}) => {
    const {radiobuttonYes, radiobuttonNo, radiobuttonYesSmall, radiobuttonNoSmall} = svg;

    return (
        <div className={s.radioGroup}>
            {radioItems.map((item) => {
                let matchingSvg;

                if (width < 770) {
                    matchingSvg = value === item.value ? radiobuttonYesSmall : radiobuttonNoSmall;
                } else {
                    matchingSvg = value === item.value ? radiobuttonYes : radiobuttonNo;
                }

                return(<div key={item.id}>
                    <input
                        name="radio"
                        type="radio"
                        value={item.value}
                        id={"radio" + item.value}
                        checked={value === item.value}
                        onChange={(event) => onChange(event.target.value)}
                    />  
                    <label htmlFor={"radio" + item.value} className={s.radioGroup__radiobutton}>
                        <Image
                            src={matchingSvg.src}
                            alt="radiobutton"
                            width={matchingSvg.width}
                            height={matchingSvg.height}/>
                        <p>{item.label}</p>
                    </label>
                </div>)
            })}
        </div>
    )
}

export default RadioGroup;