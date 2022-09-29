import logo from '../assets/images/logo.png'
import './Header.css'
import { NavLink } from "react-router-dom";
import { Pin } from '../assets/svgIcons/pin';
export const Header = () => {
    return (
        <div>
            <header>
                <div className='header' >
                    <div className='header__container' >
                        <div className='header__logo' ><NavLink to='/' ><img src={logo} alt='donuteria logo' /></NavLink>
                        </div>
                        <nav>
                            <div className='header__list' >
                                <div className='header__item' >
                                    <NavLink
                                        to='/'
                                    >
                                        О нас
                                    </NavLink>
                                </div>
                                <div className='header__item'>
                                    <NavLink
                                        to='/products'
                                    >
                                        Наша продукция
                                    </NavLink>
                                </div>
                                <div className='header__item'>
                                    <NavLink
                                        to='/contacts'
                                    >
                                        Найти нас
                                        <Pin />
                                    </NavLink>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}