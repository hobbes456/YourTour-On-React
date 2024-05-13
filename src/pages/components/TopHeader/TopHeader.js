import { useState } from "react";
import Link from "next/link";
import s from "./TopHeader.module.scss";
import Logo from "../Logo";

import { links } from "@/lib/links";

export default function TopHeader({isFixed}) {
    const [isShow, setIsShow] = useState(false);

    if (isFixed) {
        window.addEventListener("scroll", () => {
            setIsShow(window.scrollY > 450 ? true : false);
        });
    }

    return (
      <div className={`${s.topHeader} ${isFixed ? s.topHeader_fixed : "" } ${isShow ? s.topHeader_show : "" }`}
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