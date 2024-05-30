import Image from "next/image";

import Title from "@/components/common/Title";
import { titleContent } from "@/constants/titleContent.jsx";
import { galleryScreens } from "@/stubs/galleryScreens";

import s from "./Gallery.module.scss";

const Gallery = () => {
    return (<div className={s.gallery}>
        <Title text={titleContent[2]}/>
        <div className={s.gallery__screens}>
            {galleryScreens.map((screen) => {
                return (
                    <div className={s.gallery__image} key={screen.id}>
                        <Image
                            src={screen.img.src}
                            alt={screen.img.src}
                            width={screen.img.width}
                            height={screen.img.height}/>
                    </div>
                )
            })}
        </div>
    </div>)
}

export default Gallery;