import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import Card from "@/components/common/Card";
import { data } from "@/stubs/data";
import { links } from "@/constants/links";

import s from "./Tours.module.scss";

const Tours = () => {
    const [activeLinkId, setActiveLinkId] = useState(links.tours[0].id);

    const handleActiveLinkId = (linkId) => {
        setActiveLinkId(prev => prev = linkId);
    }

    return (<div className={s.tours} id="tours">    
        <div className={s.tours__menu}>
            <h2 className={s.tours__title}>Выбери свой тур</h2>
            <nav className={s.tours__navigation}>
                {links.tours.map((item) => {
                    return (
                        <Link
                            key={item.id}
                            className={clsx(s.tours__link, activeLinkId === item.id && s.tours__link_active)}
                            href={item.href}
                            onClick={() => handleActiveLinkId(item.id)}
                        >
                        {item.text}
                        </Link>
                    )
                })}
            </nav>
            <div className={s.tours__cards}>
                {data.map((card) => {
                    return(
                        <Card key={card.id} data={card} parentClass={s.tours__card}/>
                    )
                })}
            </div>
        </div>
    </div>);
}

export default Tours;