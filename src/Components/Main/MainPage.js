import React from 'react';
import ImageSlider from "./ImageSlider/ImageSlider";
import {Slider_data,TechnologySkills} from "./mainData";
import SkillsBlock from "./SkillsBlock/SkillsBlock";
import ExperienceBlock from "./ExperienceBlock/ExperienceBlock";
import ProjectBlock from "./ProjectBlock/ProjectBlock";
import TechnologiesBlock from "./TechnologiesBlock/TechnologiesBlock";

const MainPage = ({...props}) => {
    return(
        <main>
            <ImageSlider data={Slider_data}/>
            <SkillsBlock />
            <ExperienceBlock/>
            <ProjectBlock/>
            <TechnologiesBlock skills={TechnologySkills}/>
        </main>
    )
}

export default MainPage;
