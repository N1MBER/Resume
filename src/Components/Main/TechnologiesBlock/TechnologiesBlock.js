import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import style from './technology.module.scss';

const TechnologiesBlock = ({skills,...props}) => {
    return(
        <div className={style.technologiesBlock} id={'technologies'}>
            <p className={style.technologiesBlock__title}>Work Skills</p>
            <div className={style.technologiesBlock__list}>
                {skills.map(item => <TechnologyRate {...item} />)}
            </div>
        </div>
    )
}

const TechnologyRate = ({title,rate,icon, ...props}) => {
    const [countRate, setCountRate] = useState(0);

    const getCountRate = (rate_percent) => {
        switch (Math.trunc((rate_percent/ 20) + 0.5)){
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 4;
            default:
            case 5:
                return 5;
        }
    }

    useEffect(() => {
        setCountRate(getCountRate(rate))
    },[])

    return(
        <div className={style.technology}>
            <div className={style.technology__title}>
                <div className={style.imageContainer}>
                    <img className={style.imageContainer__image} src={icon}/>
                </div>
                <p className={style.textBlock}>{title}</p>
            </div>
            <div className={style.rateBlock}>
                {[1,2,3,4,5].map((item, index) =>
                    <div className={classnames(style.rateBlock__line, {
                        [style.blueLine]: index < countRate
                    })}/>
                    )}
            </div>
        </div>
    )
}

export default TechnologiesBlock
