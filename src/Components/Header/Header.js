import React from 'react';
import style from './header.module.scss';
import classnames from 'classnames';
import logo from '../../assets/image/55994f1170460636fc0a25037f9b2e1d.jpg'

const MenuArr = [
    {
        title: 'Home',
        id: 'main'
    },
    {
        title: 'Skills',
        id: 'skills'
    },
    {
        title: 'Experience',
        id: 'experience'
    },
    {
        title: 'My Projects',
        id: 'projects'
    },
    {
        title: 'Technologies',
        id: 'technologies'
    }
]

const Header = ({...props}) => {

    const scrollToBlock = (id) => {
        let block = document.getElementById(id) ? document.getElementById(id).getBoundingClientRect() : undefined;
        if (block){
            window.scrollTo(block.x, block.y)
        }
    }

    return(
        <header className={style.header}>
            <button className={style.header__title}
                    onClick={() => {
                        window.open('https://vk.com/n1mberspb')
                    }}
            >
                <div className={style.imageContainer}>
                    <img className={style.imageContainer__image} src={logo}/>
                </div>
                <p className={style.header__title_bold}>N1MBER</p>
            </button>
            <div className={style.header__menu}>
                {MenuArr.map(item => {
                    return(
                        <button className={style.menuButton}
                            onClick={() => scrollToBlock(item.id)}
                        >
                            <p className={style.menuButton__text}>{item.title}</p>
                            <p className={classnames(style.menuButton__text, {
                                [style.hiddenText]: true
                            })}>{item.title}</p>
                        </button>
                    )
                })}
            </div>
        </header>
    )
}

export default Header;
