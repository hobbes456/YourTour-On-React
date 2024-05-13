import dynamic from "next/dynamic";
import Image from "next/image";
import s from "./Header.module.scss";

const TopHeader = dynamic(() => import("../TopHeader"), {
    ssr: false,
});

export default function Header() {
    return (
        <div className={s.header}>
            <div className={s.header__image}>
                <Image 
                    className={s.header__image_img}
                    src="/images/header-img.png"
                    alt="header_image"
                    width={2250}
                    height={1500}
                />
            </div>
            <TopHeader isFixed={false}/>
            <TopHeader isFixed={true}/>
            <div className={s.header__bottom}>
                <h1 className={s.header__title}>Идеальные путешествия существуют</h1>
                <p className={s.header__subtitle}>Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
                <button className={s.header__button} type="button">Найти тур</button>
            </div>
        </div>
    )
}