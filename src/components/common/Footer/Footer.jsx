import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants/footerLinks";

import s from "./Footer.module.scss";

const Footer = () => {
    return (<div className={s.footer}>
        <div className={s.footer__information}>
            <p className={s.footer__text}>Наши социальные сети</p>
            <div className={s.footer__links}>
                {footerLinks.map((link) => {
                    return (
                        <Link className={s.footer__link}
                        key={link.id}
                        href={"#" + link.text}>
                            <Image
                                src={link.svg.src}
                                alt={link.svg.src}
                                width={link.svg.width}
                                height={link.svg.height}/>
                                {link.text}
                        </Link>
                    );
                })}
            </div>
        </div>
    </div>);
}

export default Footer;