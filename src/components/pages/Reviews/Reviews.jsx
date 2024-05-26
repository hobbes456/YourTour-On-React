import Title from "@/components/common/Title";
import Review from "@/components/common/Review";

import s from "./Reviews.module.scss";

const Reviews = () => {
    return (
        <div className={s.reviews} id="reviews">
            <Title/>
            <div className={s.reviews__content}>
                <Review/>
            </div>
        </div>
    )
}

export default Reviews;