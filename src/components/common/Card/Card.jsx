import Image from "next/image";
import clsx from "clsx";

import ArrowButton from "../ArrowButton";

import s from "./Card.module.scss";

const Card = ({data, parentClass}) => {
    return (<div className={clsx(parentClass, s.card)}>
        <div className={s.card__image}>
            <Image
                src={data.img.src}
                alt={data.img.alt}
                width={data.img.width}
                height={data.img.height}    
            />
        </div>
        <h3 className={s.card__title}>{data.title}</h3>
        <p className={s.card__price}>{data.price}</p>
        <ArrowButton buttonClass={s.card__button}/>
    </div>);
}

export default Card;