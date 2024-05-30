import Image from "next/image";
import Link from "next/link";

import footerPhoto from "/public/images/footer/footer-photo.jpg";

import s from "./Agitation.module.scss";

const Agitation = () => {
    return (<div className={s.agitation}>
        <Image
            className={s.agitation__image}
            src={footerPhoto.src}
            alt={footerPhoto.src}
            width={footerPhoto.width}
            height={footerPhoto.height}/>
        <div className={s.agitation__content}>
            <h3 className={s.agitation__title}>Пора в путешествие <br/> вместе с нами!</h3>
            <p className={s.agitation__text}>
                Напиши на почту и узнай подробности на
                <label> </label>
                <Link className={s.agitation__link}
                href="mailto:yourtour@gmail.com">yourtour@gmail.com</Link>
            </p>
        </div>
    </div>)
}

export default Agitation;