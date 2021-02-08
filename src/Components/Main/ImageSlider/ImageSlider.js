import React, {useState} from 'react';
import {Fade,Slide}  from 'react-slideshow-image';
import style from './image_slider.module.scss';
import Download from '../../../assets/image/698392-icon-129-cloud-download-512.png';
import classnames from 'classnames'

const ImageSlider = ({data,...props}) => {
    const [visible, setVisible] = useState(false);

    return(
        <div className={style.slider} onMouseLeave={() => setVisible(false)}  id={'main'}>
            <div className={classnames(style.hoverBlock, {
                [style.visibleInfo]: visible
            })}>
                <p className={style.hoverBlock__title}>React Front-end & Mobile React-Native Developer</p>
                <p className={style.hoverBlock__text}>Резюме кандидата</p>
                <button className={style.downloadButton}>
                    <img className={style.downloadButton__image} src={Download}/>
                    <p className={style.downloadButton__text}>Download resume</p>
                </button>
            </div>
            <button
                className={classnames(style.viewButton, {
                    [style.whiteButton]: visible
                })}
                onClick={() => setVisible(!visible)}
            >?</button>
            <Fade
                autoplay={true}
                infinite={true}
                duration={3000}
                transitionDuration={500}
            >
                {data.map((item, index) => {
                    return(
                        <div className={style.sliderBlock}>
                            <div className={style.sliderBlock__imageContainer}>
                                <img className={style.sliderBlock__imageContainer_img} src={item.image} alt={index}/>
                            </div>
                            <div className={style.sliderBlock__textContainer}>
                                {item.title}
                                {item.text}
                            </div>
                        </div>
                    )
                })}
            </Fade>
        </div>
    )
};



export default ImageSlider;
