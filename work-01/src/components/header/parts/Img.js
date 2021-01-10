import React from 'react';
import './style.scss';

function Img() {

    return (
        <div className='img__header'>
            <img src={process.env.PUBLIC_URL + 'images/img/thousand-01.png'} alt='travel' />
        </div>
    )
}

export default Img;