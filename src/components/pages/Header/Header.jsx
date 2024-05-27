import Image from "next/image";

import TopHeader from "@/components/pages/TopHeader";
import headerImage from "/public/images/header-img.png";

import s from "./Header.module.scss";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__image}>
                <Image 
                    className={s.header__image_img}
                    src={headerImage.src}
                    alt="header_image"
                    width={headerImage.width}
                    height={headerImage.height}
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

export default Header;