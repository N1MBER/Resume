import React from 'react';
import image from '../../../assets/image/IMG_0028.JPG'
import {SkillsInfo} from "../mainData";
import Adaptive from '../../../assets/image/269-2691041_responsive-web-computer-mobile-tablet-svg-png-icon.png'
import style from './skills_block.module.scss';

const SkillsBlock = ({...props}) => {
    return(
        <div className={style.skills}  id={'skills'}>
            <div className={style.skills__line}/>
            <div className={style.skillsPerson}>
                <p className={style.skillsPerson__title}>Skills & Expertise</p>
                <p className={style.skillsPerson__info}>Колесников Максим</p>
                <p className={style.skillsPerson__text}> React Front-end & Mobile React-Native<br/>Developer</p>
                <div className={style.photoContainer}>
                    <img className={style.photoContainer__image}src={image}/>
                </div>
            </div>
            <div className={style.skillsDescription}>
                <div className={style.skillsDescription__list}>
                    {SkillsInfo.map(data => <InfoBlock image={data.image} data={data}/>)}
                </div>
                <div className={style.skillsDescription__info}>
                    <p className={style.skillsDescription__info_text}><b>Smart Digital Solutions.</b> Занимаюсь разработкой как лэндингов и простых сайтов, так и серьезных вебсервисов и мобильных приложений</p>
                    <img className={style.skillsDescription__info_image} src={Adaptive}/>
                </div>
            </div>
        </div>
    )
}

const InfoBlock = ({image, data, ...props}) => {
    return(
        <div className={style.infoBlock}>
            <div className={style.logoContainer}>
                <img className={style.logoContainer__image} src={image}/>
            </div>
            <div className={style.infoBlock__text}>
                <p className={style.infoBlock__text__bold}>{data.title}</p>
                <p className={style.infoBlock__text__regular}>{data.text}</p>
            </div>
        </div>
    )
}

export default SkillsBlock;
