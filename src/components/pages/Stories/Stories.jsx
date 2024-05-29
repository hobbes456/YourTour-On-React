import Title from "@/components/common/Title";
import Card from "@/components/common/Card";
import { titleContent } from "@/constants/titleContent";
import { cardData } from "@/stubs/cardData";

import s from "./Stories.module.scss";

const Stories = () => {
    return (<div className={s.stories} id="stories">
        <Title text={titleContent[3]}/>
        <div className={s.stories__cards}>
            {cardData.filter((card) => card.isBig).map((card) => {
                return (
                    <Card key={card.id} data={card} parentClass={s.stories__card}/>
                )
            })}
        </div>
    </div>)
}

export default Stories;