import Image from "next/image";

import { options } from "@/constants/options";
import svg from "@/constants/svg";

import s from "./Form.module.scss";
import Link from "next/link";

const Form = () => {
    const {iconDropdown} = svg;

    return (
        <form className={s.form} action="#" method="post">
            <div className={s.form__item}>
                <label htmlFor="name">Имя</label>
                <input
                    className={s.form__field}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Введите Ваше имя"
                    required/>
            </div>
            <div className={s.form__item}>
                <lavel htmlFor="path">Направление</lavel>
                <select 
                    className={s.form__field}
                    type="text"
                    id="path"
                    name="path"
                    required
                >
                    {options.map((option) => {
                        return <option key={options.indexOf(option)} value={option}>{option}</option>
                    })}
                </select>
                <div className={s.form__arrow}>
                    <Image
                        src={iconDropdown.src}
                        alt="iconDropdown"
                        width={iconDropdown.width}
                        height={iconDropdown.height}    
                    />
                </div>
            </div>
            <div className={s.form__item}>
                <label htmlFor="email">Email</label>
                <input 
                    className={s.form__field} type="email"
                    id="email"
                    name="email"
                    placeholder="example@mail.ru"
                    required/>
            </div>
            <div className={s.form__item}>
                <label htmlFor="telefon">Телефон</label>
                <input
                    className={s.form__field} 
                    type="tel"
                    id="telefon"
                    name="telefon"
                    pattern="[+]{1}[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    placeholder="+7 ( _ _ _ ) - _ _ _ - _ _ _ - _ _ - _ _"
                    required/>
            </div>
            <div className={s.form__item}>
                <label htmlFor="date-from">Дата от</label>
                <input 
                    className={s.form__field}
                    type="date"
                    id="date-from"
                    name="date-from"
                    min="2010-01-01"
                    max="2030-12-31"
                    required/>
            </div>
            <div className={s.form__item}>
                <label htmlFor="date-to">Дата до</label>
                <input 
                    className={s.form__field}
                    type="date"
                    id="date-to"
                    name="date-to"
                    min="2010-01-01"
                    max="2030-12-31"
                    required/>
            </div>
            <div className={s.form__item}>
                <label htmlFor="comment">Комментарий</label>
                <textarea
                    className={s.form__field}
                    id="comment"
                    name="comment"
                    rows={4}/>
            </div>
            <div className={s.form__item}>
                <p className={s.form__text}>Вам есть 18 лет?</p>
                <div className={s.form__radios}>
                    <div>
                        <input 
                            type="radio"
                            name="answer"
                            id="r-yes"
                            checked/>
                        <label htmlFor="r-yes">Да</label>
                    </div>
                    <div>
                        <input 
                            type="radio"
                            name="answer"
                            id="r-no"
                            checked/>
                        <label htmlFor="r-no">Нет</label>
                    </div>
                </div>
            </div>
            <div className={s.form__item}>
                <div className={s.form__licentia}>
                    <input 
                        type="checkbox"
                        name="licentia"
                        id="licentia"
                        required/>
                    <label htmlFor="licentia"/>
                    <p>Нажимая кнопку, я принимаю условия 
                        <Link href="#licentia">Лицензионного договора</Link>
                    </p>
                </div>
            </div>
            <div className={s.form__item}>
                <div className={s.form__buttons}>
                    <button className={s.form__button} type="submit">Найти тур</button>
                    <button className={s.form__button} type="reset">Сбросить</button>
                </div>
            </div>
        </form>
    )
}

export default Form;