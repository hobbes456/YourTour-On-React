import Image from "next/image";

import Title from "@/components/common/Title";
import { galleryScreens } from "@/stubs/galleryScreens";

import s from "./Gallery.module.scss";

const Gallery = () => {
    return (<div className={s.gallery}>
        <Title/>
        <div className={s.gallery__screens}>
            {galleryScreens.map((screen) => {
                return (
                    <div className={s.gallery__image} key={screen.width}>
                        <Image
                            src={screen.src}
                            alt={screen.src}
                            width={screen.width}
                            height={screen.height}/>
                    </div>
                )
            })}
        </div>
    </div>)
}

export default Gallery;