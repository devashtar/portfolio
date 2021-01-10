import React from 'react';

function Nav() {

    return (
        <>
            <nav className='nav__menu'>
                <ul className='nav__list'>
                   <li className='nav__item'>
                       <a href='/' className='item__link'>Home</a>
                   </li>
                   <li className='nav__item'>
                       <a href='/' className='item__link'>Destionations</a>
                   </li>
                   <li className='nav__item'>
                       <a href='/' className='item__link'>About</a>
                   </li>
                   <li className='nav__item'>
                       <a href='/' className='item__link'>Pathner</a>
                   </li>
                   <li className='nav__item'>
                       <a href='/' className='item__link auth'>Login</a>
                   </li>
                   <li className='nav__item'>
                       <a href='/' className='item__link auth'>Register</a>
                   </li>
                </ul>
            </nav>
            <div className='burger'><span></span></div>
        </>
    )
}

export default Nav;