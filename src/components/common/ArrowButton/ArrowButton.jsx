import Image from "next/image";

import svg from "@/constants/svg";

import s from "./ArrowButton.module.scss";

const ArrowButton = ({buttonClass}) => {
    const {arrowForButton} = svg;

    return (<div className={s.arrowButton}>
        <button className={buttonClass} type="button">
            Подробнее
            <Image
                src={arrowForButton.src}
                alt="arrowForButton"
                width={arrowForButton.width}
                height={arrowForButton.height}
            />
        </button>
    </div>);
}

export default ArrowButton;