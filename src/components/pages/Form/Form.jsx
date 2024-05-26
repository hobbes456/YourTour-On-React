import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { InputMask } from "@react-input/mask";

import RadioGroup from "@/components/common/RadioGroup";
import { templateFormDate } from "@/constants/templateFormDate";
import { options } from "@/constants/options";
import svg from "@/constants/svg";

import s from "./Form.module.scss";

const Form = () => {
    const [formDate, setFormDate] = useState(structuredClone(templateFormDate));
    const [arrIdChange, setArrIdChange] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    const handlerItemChange = (event) => {
        const {id, value} = event.target;

        setFormDate(
            prev => ({...prev, [id]: value})
        );

        setArrIdChange(
            arrIdChange.includes(id) ? [...arrIdChange] : [...arrIdChange, id]
        )
    }

    const handlerRadioChange = (value) => {        
        setFormDate(
            prev => ({...prev, isAdult: value === "false" ? false : true})
        );
    }

    const handleResize = (event) => {
        setWidth(prev => prev = event.target.innerWidth);
    }

    const handlerSubmit = (event) => {
        event.preventDefault();

        console.log(formDate);
    }

    const handlerReset = (event) => {
        event.preventDefault();
        
        setFormDate(structuredClone(templateFormDate));
        setArrIdChange([]);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const {iconDropdown} = svg; 

    return (
        <form 
            className={s.form}
            id="tourCreate" 
            action="#" 
            method="post">
            <div className={s.form__item}>
                <label htmlFor="name">Имя</label>
                <input
                    className={s.form__field}
                    value={formDate.name}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Введите Ваше имя"
                    onChange={handlerItemChange}
                    required
                    />
            </div>
            <div className={s.form__item}>
                <label htmlFor="path">Направление</label>
                <select 
                    className={clsx(s.form__field, !arrIdChange.includes("path") && s.form__field_grey)}
                    value={formDate.path}
                    type="text"
                    id="path"
                    name="path"
                    onChange={handlerItemChange}
                    required
                >
                    <option key={0} value="" hidden>Куда хотите ехать</option>
                    {options.map((option) => {
                        return <option key={options.indexOf(option) + 1} value={option}>{option}</option>
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
                    value={formDate.email}
                    id="email"
                    name="email"
                    placeholder="example@mail.ru"
                    onChange={handlerItemChange}
                    required
                    />  
            </div>
            <div className={s.form__item}>
                <label htmlFor="telefon">Телефон</label>
                <InputMask 
                    className={s.form__field}
                    value={formDate.telefon}
                    mask="+7 (___)-___-__-__"
                    replacement={{ _: /\d/ }}
                    id="telefon"
                    name="telefon"
                    placeholder="+7 ( _ _ _ ) - _ _ _ - _ _ _ - _ _ - _ _"
                    onChange={handlerItemChange}
                    required
                    />                
            </div>
            <div className={s.form__item}>
                <label htmlFor="dateFrom">Дата от</label>
                <input 
                    className={clsx(s.form__field, !arrIdChange.includes("dateFrom") && s.form__field_grey)}
                    value={formDate.dateFrom}
                    type="date"
                    id="dateFrom"
                    name="dateFrom"
                    min="2010-01-01"
                    max="2030-12-31"
                    onChange={handlerItemChange}
                    required
                    />
            </div>
            <div className={s.form__item}>
                <label htmlFor="dateTo">Дата до</label>
                <input 
                    className={clsx(s.form__field, !arrIdChange.includes("dateTo") && s.form__field_grey)}
                    value={formDate.dateTo}
                    type="date"
                    id="dateTo"
                    name="dateTo"
                    min="2010-01-01"
                    max="2030-12-31"
                    onChange={handlerItemChange}
                    required
                    />
            </div>
            <div className={s.form__item}>
                <label htmlFor="comment">Комментарий</label>
                <textarea
                    className={s.form__field}
                    value={formDate.comment}
                    id="comment"
                    name="comment"
                    rows={4}
                    onChange={handlerItemChange}/>
            </div>
            <div className={s.form__item}>
                <p className={s.form__text}>Вам есть 18 лет?</p>
                <RadioGroup
                    width={width}
                    value={formDate.isAdult}
                    onChange={handlerRadioChange}/>
            </div>
            <div className={s.form__item}>
                <div className={s.form__buttons}>
                    <button 
                        className={s.form__button} 
                        type="submit"
                        onClick={handlerSubmit}
                    >Найти тур</button>
                    <button 
                        className={s.form__button}
                        type="reset"
                        onClick={handlerReset}
                    >Сбросить</button>
                </div>
            </div>
        </form>
    )
}

export default Form;