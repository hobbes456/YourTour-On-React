import cardTourImage1 from "/public/images/cardstour/card-tour-photo-1.png";
import cardTourImage2 from "/public/images/cardstour/card-tour-photo-2.png";
import cardTourImage3 from "/public/images/cardstour/card-tour-photo-3.png";
import cardTourImage4 from "/public/images/cardstour/card-tour-photo-4.png";
import cardTourImage5 from "/public/images/cardstour/card-tour-photo-5.jpg";
import cardTourImage6 from "/public/images/cardstour/card-tour-photo-6.png";

import storyImage1 from "/public/images/storycards/story-photo-1.jpg";
import storyImage2 from "/public/images/storycards/story-photo-2.jpg";
import storyImage3 from "/public/images/storycards/story-photo-3.jpg";

export const cardData = [
    {
        id: 1,
        isBig: false,
        img: {
            src: cardTourImage1.src,
            alt: cardTourImage1.src,
            width: cardTourImage1.width,
            height: cardTourImage1.height
        },
        title: "Путешествие в горы",
        price: "от 80 000 руб",
    },
    {
        id: 2,
        isBig: false,
        img: {
            src: cardTourImage2.src,
            alt: cardTourImage2.src,
            width: cardTourImage2.width,
            height: cardTourImage2.height
        },
        title: "Путешествие в горы",
        price: "от 80 000 руб",
    },
    {
        id: 3,
        isBig: false,
        img: {
            src: cardTourImage3.src,
            alt: cardTourImage3.src,
            width: cardTourImage3.width,
            height: cardTourImage3.height
        },
        title: "Путешествие в горы",
        price: "от 80 000 руб",
    },
    {
        id: 4,
        isBig: false,
        img: {
            src: cardTourImage4.src,
            alt: cardTourImage4.src,
            width: cardTourImage4.width,
            height: cardTourImage4.height
        },
        title: "Путешествие в горы",
        price: "от 80 000 руб",
    },
    {
        id: 5,
        isBig: false,
        img: {
            src: cardTourImage5.src,
            alt: cardTourImage5.src,
            width: cardTourImage5.width,
            height: cardTourImage5.height
        },
        title: "Путешествие в горы",
        price: "от 80 000 руб",
    },
    {
        id: 6,
        isBig: false,
        img: {
            src: cardTourImage6.src,
            alt: cardTourImage6.src,
            width: cardTourImage6.width,
            height: cardTourImage6.height
        },
        title: "Путешествие в горы",
        price: "от 80 000 руб",
    },
    {
        id: 1,
        isBig: true,
        img: {
            src: storyImage1.src,
            alt: storyImage1.src,
            width: storyImage1.width,
            height: storyImage1.height
        },
        title: "Автостопом в Стамбул",
        text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
        lists: [
            {id: 1, text: "вкусная еда"},
            {id: 2, text: "дешевый транспорт"},
            {id: 3, text: "красивый город"}
        ],
        links: [
            {id: 1, link: "instagram"},
            {id: 2, link: "facebook"},
            {id: 3, link: "Youtube"}
        ],
    },
    {
        id: 2,
        isBig: true,
        img: {
            src: storyImage2.src,
            alt: storyImage2.src,
            width: storyImage2.width,
            height: storyImage2.height
        },
        title: "Автостопом в Стамбул",
        price: "от 80 000 руб",
        text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
        links: [
            {id: 1, link: "instagram"},
            {id: 2, link: "ВКонтакте"},
        ],
    },
    {
        id: 3,
        isBig: true,
        img: {
            src: storyImage3.src,
            alt: storyImage3.src,
            width: storyImage3.width,
            height: storyImage3.height
        },
        title: "Автостопом в Стамбул",
        text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
        links: [
            {id: 1, link: "instagram"},
            {id: 2, link: "facebook"},
            {id: 3, link: "ВКонтакте"},
        ],
    },
];