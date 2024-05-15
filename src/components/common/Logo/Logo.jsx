import Image from "next/image";
import Link from "next/link";

import svg from "@/constants/svg";

import s from "./Logo.module.scss";

const Logo = ({isBlack}) => {
    const { yourTourWhite, yourTourBlack } = svg;
    const yourTour = isBlack ? yourTourBlack : yourTourWhite;

    return (
        <div className={s.logo}>
            <Link href="#">
                <Image
                    className={s.logo__image}
                    src={yourTour.src}
                    alt="YourTourLogo"
                    width={yourTour.width}
                    height={yourTour.height}
                />
            </Link>
        </div>
    )
}

export default Logo;