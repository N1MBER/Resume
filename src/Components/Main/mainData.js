import Image1 from '../../assets/image/4DB2B15D-87F6-47A7-8AF0-A68D180E84BE.JPG';
import Image2 from '../../assets/image/IMG_0788.jpg';
import Image3 from '../../assets/image/IMG_9356.jpg';
import Image4 from '../../assets/image/IMG_0787.PNG';
import Image5 from '../../assets/image/IMG_6883.HEIC';
import Brush from '../../assets/image/svg+brush+general+illustrate+paint+paint+brush+painting+icon-1320185155836259160.png';
import Bracket from '../../assets/image/code_brackets-512.png';
import Screen from '../../assets/image/04a888e7307b674c00e2ef537a88504e-monitor-screen-icon-by-vexels.png';
import Map from '../../assets/image/map-8.svg';

import Tonex1 from '../../assets/image/Projects/Tonex1.png';
import Tonex2 from '../../assets/image/Projects/Tonex2.png';
import Tonex3 from '../../assets/image/Projects/Tonex3.png';

import PMB1 from '../../assets/image/Projects/PMB1.png';
import PMB2 from '../../assets/image/Projects/PMB2.png';

import html_icon from '../../assets/image/technologies/1024px-HTML5_logo_and_wordmark.svg.png';
import css_icon from '../../assets/image/technologies/img_545599.png';
import sass_icon from '../../assets/image/technologies/sass-6244.png';
import react_icon from '../../assets/image/technologies/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667.svg';
import react_native_icon from '../../assets/image/technologies/1280px-React-icon.svg.png';
import java_icon from '../../assets/image/technologies/213044_9c5068fb538a43fa8c84497b91927c2e.png';
import python_icon from '../../assets/image/technologies/1024px-Python-logo-notext.svg.png';
import redux_icon from '../../assets/image/technologies/redux-283024.png';
import sql_icon from '../../assets/image/technologies/sql-file-format.svg';
import git_icon from '../../assets/image/technologies/Git_icon.svg.png';

import React from 'react';
import style from './ImageSlider/image_slider.module.scss';

const getAge = () => {
    let now = new Date(); //Текущя дата
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    let dob = new Date(2000, 11, 25); //Дата рождения
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    let age; //Возраст
    age = today.getFullYear() - dob.getFullYear();
    if (today < dobnow) {
        age = age-1;
    }
    return age;
}

const analyzeAge = (age) => {
    switch (age % 10){
        case 1:
            return `${age} год`;
        case 2:
            return `${age} года`;
        default:
            return `${age} лет`;
    }
}

export const Slider_data = [
    {
        image: Image4,
        title: <p className={style.sliderInfo__title}>Колесников Максим Витальевич</p>,
        text:  <div className={style.sliderInfo__text}/>
    },
    {
        image: Image1,
        title: <p className={style.sliderInfo__title}>Коротко о себе</p>,
        text: <div className={style.sliderInfo__text}>
            <p className={style.sliderInfo__text_normal}><b>Специализация:</b> Front-end React Developer, Mobile React-Native Developer</p>
            <p className={style.sliderInfo__text_normal}><b>Возраст:</b> {analyzeAge(getAge())}</p>
        </div>
    },
    {
        image: Image2,
        title: <p className={style.sliderInfo__title}>Образование</p>,
        text:  <div className={style.sliderInfo__text}>
            <p className={style.sliderInfo__text_normal}><b>ВУЗ:</b> НИУ ИТМО</p>
            <p className={style.sliderInfo__text_normal}><b>Специальность:</b> Систепное прикладное программное обеспечение</p>
            <p className={style.sliderInfo__text_normal}><b>Годы:</b> 2018-2022 г.</p>
        </div>
    },{
        image: Image3,
        title: <p className={style.sliderInfo__title}>Контакты</p>,
        text:  <div className={style.sliderInfo__text}>
            <p className={style.sliderInfo__text_normal}><b>Почта:</b> socialfox33@gmail.com</p>
            <p className={style.sliderInfo__text_normal}><b>Telegram:</b> @n1mber</p>
        </div>
    },

]

export const SkillsInfo = [
    {
        image: Map,
        title: 'Карты, геолокация и сканирование',
        text: 'Имею опыт работы со многими основными API для карт, включающих: OPS, Apple MapKit, Google Maps/Places, Yandex Map'
    },
    {
        image: Screen,
        title: 'Адаптивность',
        text: 'Реализую грамотное отображение страниц сайта на любом разрешении'
    },
    {
        image: Brush,
        title: 'Дизайн макеты',
        text: 'Делаю верстку и стилизацию страниц с точностью до пикселя'
    },
    {
        image: Bracket,
        title: 'Программирование',
        text: 'В основной стэк входят: React, Redux, React-Native, css-препроцессоры SCSS/SASS/LESS, JS, git. А также имеются знания в: Java (Vanilla, Enterprise & Spring), Python и SubVersion'
    }
]

export const WorkExperienceData = [
    {
        from_date: new Date(2020,10),
        to_date: new Date(),
        position: 'React Front-end',
        more_info: [
            '2020 Oct - JUNIOR React Front-end',
            '2021 Jan - JUNIOR React-Native',
        ],
        description: 'Работал в Санкт-Петербургской компании SIXHANDS, занимающейся разработкай веб-сервисов, мобильных приложений, ' +
            'дизайном и оутсортингом'
    }
]

export const MyProjects = [
    {
        project: 'LocalRankTracker',
        link: 'https://localranktracker.com',
        data: [
            {
                title: 'LocalRankTracker',
                image: PMB2,
                description: 'СЕО инструмент для оценки рейтинга бизнеса'
            },
            {
                title: 'LocalRankTracker',
                image: PMB1,
                description: 'СЕО инструмент для оценки рейтинга бизнеса'
            }
        ]
    },
    {
        project: 'Tonex',
        link: 'https://tonex.club',
        data: [
            {
                title: 'Tonex',
                image: Tonex2,
                description: 'Сайт для одного из крупнейших поставщиков офисной печати в РФ'
            },
            {
                title: 'Tonex',
                image: Tonex1,
                description: 'Сайт для одного из крупнейших поставщиков офисной печати в РФ'
            },
            {
                title: 'Tonex',
                image: Tonex3,
                description: 'Сайт для одного из крупнейших поставщиков офисной печати в РФ'
            }
        ]
    },
]


export const TechnologySkills = [
    {
        title: 'HTML',
        rate: 90,
        icon: html_icon
    },
    {
        title: 'CSS',
        rate: 90,
        icon: css_icon
    },
    {
        title: 'React-Native',
        rate: 60,
        icon: react_native_icon
    },
    {
        title: 'ReactJS',
        rate: 75,
        icon: react_icon
    },
    {
        title: 'SASS/SCSS',
        rate: 90,
        icon: sass_icon
    },
    {
        title: 'GIT',
        rate: 80,
        icon: git_icon
    },
    {
        title: 'Redux',
        rate: 80,
        icon: redux_icon
    },
    {
        title: 'Java',
        rate: 70,
        icon: java_icon
    },
    {
        title: 'Python',
        rate: 60,
        icon: python_icon
    },
    {
        title: 'SQL (PostgreSQL)',
        rate: 60,
        icon: sql_icon
    },
]
