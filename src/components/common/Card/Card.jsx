import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import ArrowButton from "../ArrowButton";

import s from "./Card.module.scss";

const Card = ({data, parentClass}) => {
    console.log(data.isBig ? data.links : "");

    if (data.isBig) {
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
            <p className={s.card__text}>{data.text}</p>
            {data.lists ? 
                <ul className={s.card__list}>
                    {data.lists.map((item) => {
                        return (<li className={s.card__text} key={item.id}>{item.text}</li>);
                    })}
                </ul> :
                <></>
            }
            <div className={s.card__information}>
                <ArrowButton buttonClass={s.card__button}/>
                <div className={s.card__links}>
                    {data.links.map((link) => {
                        return (<Link 
                            className={s.card__link}
                            href={"#" + link.link}
                            key={link.id}>{link.link}</Link>)
                    })}
                </div>
            </div>
        </div>);
    } else {
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

}

export default Card;