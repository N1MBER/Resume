import React from 'react';
import {MyProjects} from "../mainData";
import Slider  from "react-draggable-slider";
import style from './project.module.scss';

const ProjectBlock = ({...props}) => {

    const getInfo = (list) => {
        return {
            data: list,
            speed: 500,
            easing: "expo",
            // bgColor: ")",
            bgColor: "rgba(255, 255, 255, 0.05)",
            buttonHref: "https://www.google.com",
            buttonTarget: "_self",
            buttonText: "View project",
            showButton: true,
        };
    }

    return(
        <div className={style.project}  id={'projects'}>
            <p className={style.project__title}>My Projects</p>
            <div className={style.project__list}>
                {MyProjects.map(item => {
                    return(
                        <div>
                            <Slider sliderSettings={getInfo(item.data)} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ProjectBlock;
