import React from 'react';
import style from './snake.module.scss'
const Snake = ({...props}) => {
    return (
        <div className={style.snakeContainer}>
            <div className={style.tail}/>
            {[1,2,3].map(item => {
                return(
                    <div className={style.bodyPart}>
                        <div className={style.bodyPart__up}/>
                        <div className={style.bodyPart__down}/>
                    </div>
                )
            })}
            <div className={style.head}/>
        </div>
    )
}

export default Snake;
