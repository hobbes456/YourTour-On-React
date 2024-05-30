import Title from "@/components/common/Title";
import Form from "@/components/pages/Form";
import { titleContent } from "@/constants/titleContent.jsx";

import s from "./TourCreate.module.scss";

const TourCreate = () => {
    return (
        <div className={s.tourCreate}>
            <Title text={titleContent[0]}/>
            <Form />
        </div>
    )
}

export default TourCreate;