import React from 'react';
import './style.scss';

import Logo from './parts/Logo.js';
import Nav from './parts/Nav.js';
import Aside from './parts/Aside.js';
import Img from './parts/Img.js';

function Header() {

    return (
        <header className='Header'>
            <div className='top__header__wrapper'>
                <Logo />
                <Nav />
            </div>
            <div className='header__wrapper'>
                <Aside />
                <Img />
            </div>
        </header>
    )
}

export default Header;