import Image from "next/image";

import { reviewData } from "@/stubs/reviewData.jsx";

import s from "./Review.module.scss";

const Review = () => {
    return (
        <>
            {reviewData.map((review) => {
                return (
                    <div className={s.review} key={review.id}>
                        <p className={s.review__text}>{review.text}</p>
                        <div className={s.review__person}>
                            <h3 className={s.review__name}>{review.name}</h3>
                            <p className={s.review__tour}>{review.tour}</p>
                            <div className={s.review__avatar}>
                                <Image
                                    src={review.img.src}
                                    alt={review.img.alt}
                                    width={review.img.width}
                                    height={review.img.height}/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Review;