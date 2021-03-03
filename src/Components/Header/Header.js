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
    const [visibleMenu,setVisibleMenu] = useState(false);
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
            <button className={style.header__button} onClick={() => setVisibleMenu(!visibleMenu)}>
                {MenuIcon}
            </button>
            <div className={classnames(style.header__menu, {
                [style.visibleMenu]: visibleMenu
            })}>
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

const MenuIcon = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="4" rx="1" fill="#FFF"/>
        <rect y="12" width="40" height="4" rx="1" fill="#FFF"/>
        <rect y="24" width="40" height="4" rx="1" fill="#FFF"/>
    </svg>
)

export default Header;
