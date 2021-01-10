import React from 'react';
import './style.scss';

function Logo() {
    
    return (
        <div className='logo__wrapper'>
            <img className='logo' src={process.env.PUBLIC_URL + 'images/icons/ellipse-out.png'} alt='logo'/>
            <img className='logo' src={process.env.PUBLIC_URL + 'images/icons/ellipse-in.png'} alt='logo'/>
        </div>
    )
}

export default Logo;