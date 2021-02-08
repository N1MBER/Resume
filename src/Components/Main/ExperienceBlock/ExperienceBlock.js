import React from 'react';
import {WorkExperienceData} from "../mainData";
import style from './experience.module.scss';

const getMonthOnRussian = (month_num) => {
    switch (month_num){
        default:
        case 1:
            return 'Январь';
        case 2:
            return 'Февраль';
        case 3:
            return 'Март';
        case 4:
            return 'Апрель';
        case 5:
            return 'Май';
        case 6:
            return 'Июнь';
        case 7:
            return 'Июль';
        case 8:
            return 'Август';
        case 9:
            return 'Сентябрь';
        case 10:
            return 'Октябрь';
        case 11:
            return 'Ноябрь';
        case 12:
            return 'Декабрь';
    }
}

const ExperienceBlock = ({...props}) => {
    return(
        <div className={style.experienceBlock} id={'experience'}>
            <div className={style.experienceBlock__title}>
                <h1 className={style.experienceBlock__title_bold}>Work experience</h1>
            </div>
            <div className={style.experienceBlock__list}>
                {WorkExperienceData.map(item => <WorkBlock data={item}/>)}
            </div>
        </div>
    )
}

const WorkBlock = ({data,...props}) => {

    const compareDate = (date1, date2) => {
        if (date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth())
            return true
        else
            return false
    }

    return(
        <div className={style.experience}>
            <div className={style.experience__left}>
                <div className={style.dateBlock}>
                    {data.from_date && <p className={style.dateBlock__month}>{getMonthOnRussian(data.from_date.getMonth() + 1)}</p>}
                    {data.to_date && compareDate(data.from_date,data.to_date) &&
                     <p className={style.dateBlock__month}>{getMonthOnRussian(data.to_date.getMonth() + 1)}</p>}
                </div>
                <div className={style.dateBlock}>
                    <p className={style.dateBlock__year}><span className={style.dateBlock__year_small}>{Math.trunc(data.from_date.getFullYear() / 10).toString()}</span>{(data.from_date.getFullYear() % 10).toString()}</p>
                    <p className={style.dateBlock__year}> - </p>
                    <p className={style.dateBlock__year}>{compareDate(data.to_date, new Date()) ? 'Present': data.to_date.getFullYear().toString()}</p>
                </div>
                <div className={style.workInfo}>
                    <p className={style.workInfo__position}>{data.position}</p>
                    {data.more_info.map(info => <p className={style.workInfo__info}>{info}</p>)}
                </div>
            </div>
            <div className={style.workDescription}>
                <p className={style.workDescription__title}>Описание работы</p>
                <p className={style.workDescription__text}>{data.description}</p>
            </div>
        </div>
    )
}

export default ExperienceBlock;
