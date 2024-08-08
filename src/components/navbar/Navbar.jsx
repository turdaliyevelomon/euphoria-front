import React, { useState } from 'react';
import logo from '../images/Logo.svg';
import heart from '../images/heart.svg';
import user from '../images/user.svg';
import shopping from '../images/shopping.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    // document.body.classList=('dark-mode');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
    };

    return (
        <header>
            <nav className={`nav`}>
                <div className='container'>
                    <div className='navbar'>
                        <img src={logo} alt='Euphoria' className='logo' />
                        <ul className='d-flex gap-5 m-0'>
                            <li className='navLi'>
                                <Link className='navli1 shop' to={'/'}>
                                    Shop
                                </Link>
                            </li>
                            <li className='navLi'>
                                <Link
                                    className='navli1 men'
                                    to={'/products/listMen'}
                                >
                                    Men
                                </Link>
                            </li>
                            <li className='navLi'>
                                <Link
                                    className='navli1 women'
                                    to={'/products/listWomen'}
                                >
                                    Women
                                </Link>
                            </li>
                        </ul>
                        <ul className='d-flex gap-3 m-0'>
                            <Link to={'/wishlist'}>
                                <li className='navItem heart'>
                                    <img src={heart} alt='heart' />
                                </li>
                            </Link>
                            <Link to={'/orders'}>
                                <li className='navItem user'>
                                    <img src={user} alt='user' />
                                </li>
                            </Link>
                            <Link to={'/cart'}>
                                <li className='navItem savat'>
                                    <img src={shopping} alt='shopping cart' />
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
