import Title from "@/components/common/Title";
import Form from "@/components/pages/Form";

import s from "./TourCreate.module.scss";

const TourCreate = () => {
    return (
        <div className={s.tourCreate}>
            <Title />
            <Form />
        </div>
    )
}

export default TourCreate;