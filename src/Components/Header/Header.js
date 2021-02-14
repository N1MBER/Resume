import React, {useState, useEffect} from 'react';
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

const menuID = ['main', 'skills', 'experience', 'projects', 'technologies'];

const Header = ({...props}) => {
    const [activePosition, setActivePosition] = useState('')

    const scrollToBlock = (id) => {
        let block = document.getElementById(id);
        if (block){
            window.scrollTo(block.offsetLeft, block.offsetTop - 60)
            setActivePosition(id)
        }
    }

    const getActivePosition = () => {
        let result = menuID[0];
        menuID.forEach(item => {
            let block = document.getElementById(item) ? document.getElementById(item): undefined;
            if (block && window.pageYOffset >=( Math.abs(block.offsetTop) - 60) && ( menuID.indexOf(item) + 1 === menuID.length || Math.abs(document.getElementById(menuID[menuID.indexOf(item) + 1]).offsetTop - 60) >= window.pageYOffset)){
               result = item;
            }
        })
        console.log(result)
        if (activePosition !== result)
            setActivePosition(result);
    }

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            getActivePosition()
        })
    }, [])


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
                        <button className={classnames(style.menuButton, {
                            [style.activeButton]: activePosition === item.id
                        })}
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
