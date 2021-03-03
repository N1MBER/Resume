import React, {useEffect} from 'react';
import style from './animation.module.scss';
import classnames from 'classnames';

const InfoBlock = (props) => {
    return(
        <div className={style.infoBlock}>
            {'Жду звонка от вас!'.split(' ').map((text, index) =>
                <p className={classnames(style.text,{
                    [style.text__right]: index % 2 === 1 ,
                    [style.text__left]: index % 2 === 0 ,
                })}>
                    {text}
                </p>)}

        </div>
    )
}

export default InfoBlock
