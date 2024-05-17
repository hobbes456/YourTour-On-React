import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

import Logo from "@/components/common/Logo";
import { links } from "@/constants/links";

import s from "./TopHeader.module.scss";

const TopHeader = ({isFixed}) => {
    const [isShow, setIsShow] = useState(false);

    const handleScroll = () => {
        setIsShow(window.scrollY > 450 ? true : false);
    }

    useEffect(() => {
        document.addEventListener("scroll", handleScroll)
        
        return () => document.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);
    
    
    return (
        <div className={clsx(s.topHeader, isFixed && s.topHeader_fixed, isShow && s.topHeader_show)}
        >
            <div className={s.topHeader__body}>
                <Logo isBlack={isFixed} />
                <nav className={s.topHeader__menu}>
                    {links.map((item) => {
                        return (
                            <Link
                                key={item.id}
                                className={s.topHeader__link}
                                href={item.href}
                            >
                            {item.text}
                            </Link>
                        );
                    })}
                </nav>
                <Link className={s.topHeader__phone} href="tel:+79999999999">
                    +7 999 999 99 99
                </Link>
            </div>
        </div>
    );
}

export default TopHeader;