import React from 'react';
import gif from '../../../assets/image/animation/noise.gif'
import style from './animation.module.scss'
import Snake from "./Snake";
import InfoBlock from "./InfoBlock";

const AnimationBlock = ({...props}) => {
    return (
        <div className={style.animationBlock}>
            <img
                className={style.animationBlock__background}
                src={gif}
            />
            <Snake/>
            <InfoBlock/>
        </div>
    )
}

export default AnimationBlock;
